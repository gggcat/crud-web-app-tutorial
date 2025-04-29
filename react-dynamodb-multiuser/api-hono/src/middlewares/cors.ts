// src/middlewares/cors.ts

import type { Context } from 'hono'
import { env } from 'hono/adapter'
import type { Env } from '../types/env'
import { createMiddleware } from 'hono/factory'
import { cors } from 'hono/cors'


// CORS設定ミドルウェア
export const corsMiddleware = createMiddleware<Env>(async (c, next) => {
  // 1. 環境変数から許可オリジンを取得
  const { CORS_ORIGINS } = env<{ CORS_ORIGINS: string }>(c)

  // 2. CORS設定オブジェクトの構築
  const options = {
    origin: CORS_ORIGINS?.split(',') || '*', // 環境変数が未設定の場合は全許可
    allowHeaders: [
      'Content-Type',
      'Authorization',
      'X-Custom-Header' // 必要に応じて追加
    ],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Response-Time'],
    maxAge: 86400, // プリフライトリクエストのキャッシュ時間（秒）
    credentials: true // 認証情報の許可
  }

  // 3. 本番環境向け警告ログ（開発用）
  if (options.origin === '*') {
    console.warn(
      '本番環境ではCORS_ORIGINSの設定を厳格化してください。' +
      '現在すべてのオリジンを許可しています'
    )
  }

  // 4. HonoのCORSミドルウェアを適用
  return cors(options)(c, next)
})
