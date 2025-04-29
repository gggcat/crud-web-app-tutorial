// src/middlewares/env-check.ts

import { createMiddleware } from 'hono/factory'
import { getRuntimeKey, env as honoEnv } from 'hono/adapter'
import type { Context } from 'hono'
import type { Env } from '../types/env'

// 必須環境変数リスト
const REQUIRED_ENV_VARS = [
  'JWT_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'GOOGLE_REDIRECT_URI'
] as const

// 環境変数検証ミドルウェア
export const envCheckMiddleware = createMiddleware<Env>(async (c, next) => {
  const runtime = getRuntimeKey()
  const envSource = getEnvSource(c, runtime)

  // 不足している環境変数を検出
  const missing = REQUIRED_ENV_VARS.filter(
    key => !envSource[key] || envSource[key]?.trim() === ''
  )

  if (missing.length > 0) {
    return c.json(
      buildErrorResponse(runtime, missing),
      500
    )
  }

  await next()
})

// ランタイムごとの環境変数ソースを安全に取得
function getEnvSource(c: Context, runtime: string): Record<string, string | undefined> {
  // Bun, Deno, Cloudflare, Nodeの順で判定
  if (runtime === 'bun' && typeof Bun !== 'undefined') return Bun.env
  if (runtime === 'deno' && typeof Deno !== 'undefined') return Deno.env.toObject()
  if (runtime === 'cloudflare' || runtime === 'workerd' || runtime === 'service-worker') return honoEnv<Env>(c)
  // デフォルトはNode.js
  return process.env
}

// エラーレスポンス生成
function buildErrorResponse(runtime: string, missingVars: readonly string[]) {
  const sourceMap: Record<string, string> = {
    node: 'process.env',
    cloudflare: 'c.env',
    bun: 'Bun.env',
    deno: 'Deno.env',
    workerd: 'c.env',
    'service-worker': 'c.env'
  }

  const errorData: Record<string, unknown> = {
    error: '環境変数設定不備',
    technicalDetails: {
      missingVariables: missingVars,
      detectedRuntime: runtime,
      expectedSource: sourceMap[runtime] ?? 'unknown',
      documentation: 'https://hono.dev/getting-started/env'
    },
    message: 'サーバー設定に不足があります。管理者に連絡してください。'
  }

  // 開発環境では設定例を追加
  if (process.env.NODE_ENV === 'development') {
    errorData.debugInfo = {
      sampleFormat: REQUIRED_ENV_VARS.map(v => `${v}="your_value_here"`).join('\n'),
      currentEnv: Object.fromEntries(REQUIRED_ENV_VARS.map(k => [k, '<masked>']))
    }
  }

  return errorData
}
