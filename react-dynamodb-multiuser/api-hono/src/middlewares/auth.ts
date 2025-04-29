// src/middlewares/auth.ts

import type { Context } from 'hono'
import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt'
import { env } from 'hono/adapter'
import { getCookie } from 'hono/cookie'

// JWTのペイロード型（必要に応じて拡張）
type JwtPayload = {
  sub: string
  [key: string]: unknown
}

// JWT認証ミドルウェア
export const authMiddleware = createMiddleware<Context>(async (c, next) => {
  // 1. 環境変数からJWTシークレットを取得
  const { JWT_SECRET } = env<{ JWT_SECRET: string }>(c)
  if (!JWT_SECRET) {
    return c.json(
      { error: 'サーバー構成エラー: JWT_SECRETが設定されていません' },
      500
    )
  }

  // 2. トークン取得（AuthorizationヘッダーとCookieの両方対応）
  let token: string | undefined
  const authHeader = c.req.header('Authorization')

  // 優先順位: Authorizationヘッダー → Cookie
  if (authHeader?.startsWith('Bearer ')) {
    token = authHeader.slice(7)
  } else {
    token = getCookie(c, 'token') || undefined
  }

  if (!token) {
    return c.json(
      { error: '認証が必要です', message: 'トークンがヘッダーまたはCookieに見つかりません' },
      401
    )
  }

  // 3. JWTトークンの検証
  try {
    const payload = await verify(token, JWT_SECRET) as JwtPayload
    if (!payload?.sub) {
      return c.json({ error: '不正なトークン形式です' }, 401)
    }

    // 4. コンテキストに認証情報を保存
    c.set('jwtPayload', payload)
    await next()
  } catch (e: any) {
    return c.json(
      {
        error: 'トークンの検証に失敗しました',
        details: process.env.NODE_ENV === 'development' ? e.message : undefined
      },
      401
    )
  }
})

// 認証後のユーザーID取得ミドルウェア（変更なし）
export const protectedRoute = createMiddleware<Context>(async (c, next) => {
  const payload = c.get('jwtPayload') as JwtPayload | undefined
  if (!payload?.sub) {
    return c.json(
      { error: '認証情報の破損', message: 'ユーザーIDを取得できません' },
      401
    )
  }
  c.set('userId', payload.sub)
  await next()
})
