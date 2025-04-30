// src/app.ts
import { Hono } from 'hono'
import type { Env } from './types/env'

//ミドルウェア
import { errorHandler } from './middlewares/errorHandler'
import { envCheckMiddleware } from './middlewares/env-check'
import { corsMiddleware } from './middlewares/cors'
import { authMiddleware, protectedRoute } from './middlewares/auth'

//ルート
import auth from './routes/auth'
import users from './routes/users'
import stocks from './routes/stocks'

const app = new Hono<{ Bindings: Env }>()

// エラーハンドラ
app.use('*', errorHandler)
// 環境変数設定
app.use('*', envCheckMiddleware)
// CORS設定
app.use('*', corsMiddleware)
// JWT認証ミドルウェア
app.use('/stocks/*', authMiddleware)
app.use('/stocks/*', protectedRoute)
app.use('/users/*', authMiddleware)
app.use('/users/*', protectedRoute)

// ルート設定
app.route('/auth', auth)
app.route('/stocks', stocks)
app.route('/users', users) // ユーザールートを追加

export default app
