// src/utils/response.ts
import { Context } from 'hono'

type ApiResponse<T = unknown> = {
  data?: T
  error?: string
  metadata?: {
    requestId: string
    timestamp: string
  }
}

export const formatResponse = <T>(
  c: Context,
  data: ApiResponse<T>,
  status: number = 200
) => {
  const response: ApiResponse<T> = {
    ...data,
    metadata: {
      requestId: crypto.randomUUID(),
      timestamp: new Date().toISOString()
    }
  }
  return c.json(response, status)
}
