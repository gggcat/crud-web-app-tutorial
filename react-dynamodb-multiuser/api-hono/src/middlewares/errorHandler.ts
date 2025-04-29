// src/middlewares/errorHandler.ts

import { createMiddleware } from 'hono/factory'
import type { Context, Next } from 'hono'
import { env } from 'hono/adapter'
import type { Env } from '../types/env'

// カスタムエラータイプの型定義
type ErrorResponse = {
  code: string
  message: string
  details?: Record<string, unknown>
  stack?: string
}

// HTTPステータスコードの型
type HTTPStatusCode = 400 | 401 | 403 | 404 | 500 | number

// 拡張可能なエラーインターフェース
interface AppError extends Error {
  statusCode?: HTTPStatusCode
  code?: string
  details?: Record<string, unknown>
}

export const errorHandler = createMiddleware<Env>(async (c: Context, next: Next) => {
  try {
    await next()
  } catch (err: unknown) {
    // エラーオブジェクトの正規化
    const error = normalizeError(err)

    // エラーロギング（構造化ログ）
    logError(c, error)

    // クライアントへのレスポンス生成
    return renderErrorResponse(c, error)
  }
})

// エラーオブジェクトの正規化
const normalizeError = (rawError: unknown): AppError => {
  // エラーがオブジェクトでない場合の処理
  if (!(rawError instanceof Error)) {
    return {
      name: 'UnknownError',
      message: 'Unknown error occurred',
      statusCode: 500
    }
  }

  // 既知のエラータイプへのマッピング
  const error: AppError = rawError
  error.statusCode = error.statusCode || 500
  error.code = error.code || error.name || 'UNKNOWN_ERROR'

  return error
}

// 構造化ロギング
const logError = (c: Context, error: AppError) => {
  const { NODE_ENV } = env<{ NODE_ENV: string }>(c)

  const logEntry = {
    timestamp: new Date().toISOString(),
    statusCode: error.statusCode,
    code: error.code,
    message: error.message,
    stack: NODE_ENV !== 'production' ? error.stack : undefined,
    details: error.details,
    path: c.req.path,
    method: c.req.method
  }

  console.error(JSON.stringify(logEntry, null, NODE_ENV === 'development' ? 2 : 0))
}

// エラーレスポンス生成
const renderErrorResponse = (c: Context, error: AppError) => {
  const { NODE_ENV } = env<{ NODE_ENV: string }>(c)
  const statusCode = Math.floor(Number(error.statusCode || 500))

  const response: ErrorResponse = {
    code: error.code || 'INTERNAL_ERROR',
    message: error.message || 'Internal Server Error',
    details: error.details
  }

  // 開発環境のみスタックトレースを追加
  if (NODE_ENV !== 'production') {
    response.stack = error.stack
  }

  return c.json(response, statusCode)
}
