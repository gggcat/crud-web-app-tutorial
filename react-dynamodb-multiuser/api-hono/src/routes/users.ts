// src/routes/users.ts
import { Hono } from 'hono'
import { formatResponse } from '../utils/response'
import { getUserByProviderId } from '../services/user'

const users = new Hono()

// 認証済みユーザー自身の情報を取得
users.get('/me', async (c) => {
  const userId = c.get('jwtPayload').sub

  try {
    const user = await getUserByProviderId(c, userId)
    if (!user) {
      return formatResponse(c, { error: 'ユーザーが見つかりません' }, 404)
    }

    // 機密情報を除外して返却
    const safeUser = {
      id: user.user_id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      created_at: user.created_at,
      updated_at: user.updated_at
    }

    return formatResponse(c, { data: safeUser })
  } catch (error) {
    console.error(`[${userId}] ユーザー情報取得失敗:`, error)
    return formatResponse(c, { error: 'ユーザー情報の取得に失敗しました' }, 500)
  }
})

export default users
