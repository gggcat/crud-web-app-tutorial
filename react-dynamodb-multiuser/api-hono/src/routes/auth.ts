import { Hono } from 'hono'
import { googleAuth } from '@hono/oauth-providers/google'
import { env } from 'hono/adapter'
import { createOrGetUser } from '../services/user'
import type { GoogleUser } from '@hono/oauth-providers/google'
import type { Env } from '../types/env'
import { sign } from 'hono/jwt'

/**
 * Google 認証用 Hono アプリケーションインスタンス
 * ルート: /google/*
 */
const auth = new Hono<{ Bindings: Env }>()

/**
 * Google認証ミドルウェアの設定
 * - 必要な環境変数が揃っているかをチェックし、不足していればエラーを投げる
 * - googleAuthミドルウェアを適用し、OAuth 2.0フローを開始
 */
auth.use('/google/*', async (c, next) => {
  // 環境変数からGoogle OAuth設定値を取得
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  } = env<Env>(c)

  // 設定値が揃っていない場合はエラー
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
    throw new Error('Google認証設定が不完全です')
  }

  // Google OAuth2.0認証ミドルウェアを適用
  return googleAuth({
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    scope: ['openid', 'email', 'profile'],
    prompt: 'consent',
    access_type: 'offline'
  })(c, next)
})

/**
 * Google認証コールバックハンドラ
 * - 認証後、Googleユーザー情報を取得
 * - ユーザーが存在しない場合は新規作成、存在する場合は取得
 * - 認証済みユーザーに対してアプリ用セッショントークンを発行
 */
auth.get('/google', async (c) => {
  // googleAuthミドルウェアでセットされたユーザー情報を取得
  const googleUser = c.get('user-google') as GoogleUser | undefined

  // 必須情報がなければエラーを返す
  if (!googleUser?.id || !googleUser.email) {
    return c.json({ error: '無効なGoogleアカウントです' }, 401)
  }

  try {
    // ユーザー情報をDBから取得または新規作成
    const user = await createOrGetUser(c, {
      provider: 'google',
      providerId: googleUser.id, // GoogleのユーザーID
      email: googleUser.email,
      name: googleUser.name || '',
      picture: googleUser.picture || ''
    })

    // セッショントークンを発行
    const appToken = await createSessionToken(c, user.user_id)
    // return c.json({
    //   token: appToken,
    //   user: {
    //     id: user.user_id,
    //     email: user.email,
    //     name: user.name
    //   }
    // }, 201)

    //トークンをフロントエンドのコールバックへ返す
    const code = c.req.query('code');
    const stateRaw = c.req.query('callback_url');
    let callbackUrl = 'http://localhost:5003/login/callback';
    try {
      if (stateRaw) {
        const stateObj = JSON.parse(decodeURIComponent(stateRaw));
        if (stateObj.callbackUrl) callbackUrl = stateObj.callbackUrl;
      }
    } catch {}

    return c.redirect(`${callbackUrl}?jwt=${encodeURIComponent(appToken)}`);

  } catch (error) {
    // サーバーエラー時のハンドリング
    console.error('認証処理エラー:', error)
    return c.json({ error: '認証サーバーエラー' }, 500)
  }
})

/**
 * 指定ユーザーIDでJWTセッショントークンを生成
 * @param c Honoコンテキスト
 * @param userId ユーザーID
 * @returns JWTトークン
 */
const createSessionToken = async (c: Context<Env>, userId: string) => {
  const { JWT_SECRET } = env<Env['Bindings']>(c)
  // デバッグログ（本番運用時は削除・制限推奨）
  console.log('JWT_SECRET:', JWT_SECRET)
  console.log('userId:', userId)
  return await sign(
    { sub: userId, role: 'user' },
    JWT_SECRET,
    'HS256'
  )
}

export default auth
