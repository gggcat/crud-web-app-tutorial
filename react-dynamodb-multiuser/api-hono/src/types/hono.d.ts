// src/types/hono.d.ts（新規作成）
import { GoogleUser } from '@hono/oauth-providers/google'

declare module 'hono' {
  interface ContextVariableMap {
    'user-google': GoogleUser | undefined
    'token': string | undefined
  }
}
