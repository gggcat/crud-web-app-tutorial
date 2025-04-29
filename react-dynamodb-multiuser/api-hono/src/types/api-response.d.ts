// src/types/api-response.d.ts
export type ApiResponse<T = unknown> = {
    data?: T
    error?: string
    metadata?: {
      requestId: string
      timestamp: string
      durationMs?: number
    }
    pagination?: any
  }
