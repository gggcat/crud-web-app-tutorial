import { Hono } from 'hono'
import { formatResponse } from '../utils/response'
import { getStocksByUser, getStock, putStock, deleteStock } from '../services/stock'

/**
 * 株式情報管理ルーター
 * 認証済みユーザーの株式データ操作を提供
 */
const stocks = new Hono()

// ミドルウェア: 全ルートでJWTペイロードを利用
stocks.use('*', async (c, next) => {
  // JWTミドルウェアでセットされたペイロードを確認
  if (!c.get('jwtPayload')?.sub) {
    return formatResponse(c, { error: '認証が必要です' }, 401)
  }
  await next()
})

/**
 * ユーザー所有の全株式を取得
 * @route GET /
 * @returns {Stock[]} 株式情報の配列
 * @error 401 - 認証エラー
 * @error 500 - サーバーエラー
 */
stocks.get('/', async (c) => {
  const userId = c.get('jwtPayload').sub
  try {
    const userStocks = await getStocksByUser(c, userId)
    return formatResponse(c, { data: userStocks })
  } catch (error) {
    console.error(`[${userId}] 株式一覧取得失敗:`, error)
    return formatResponse(c, { error: 'データ取得に失敗しました' }, 500)
  }
})

/**
 * 特定株式の詳細を取得
 * @route GET /:stock_code
 * @param {string} stock_code - 株式コード（URLパラメータ）
 * @returns {Stock} 株式情報
 * @error 404 - データ不存在
 * @error 500 - サーバーエラー
 */
stocks.get('/:stock_code', async (c) => {
  const userId = c.get('jwtPayload').sub
  const stockCode = c.req.param('stock_code')

  try {
    const stock = await getStock(c, userId, stockCode)
    if (!stock) {
      return formatResponse(c, { error: '指定された株式が見つかりません' }, 404)
    }
    return formatResponse(c, { data: stock })
  } catch (error) {
    console.error(`[${stockCode}] 詳細取得失敗:`, error)
    return formatResponse(c, { error: '詳細取得に失敗しました' }, 500)
  }
})

/**
 * 新規株式を登録
 * @route POST /:stock_code
 * @param {string} stock_code - 株式コード（URLパラメータ）
 * @body {Stock} 株式データ
 * @returns 登録成功フラグ
 * @error 400 - パラメータ不整合
 * @error 409 - 重複登録
 * @error 500 - サーバーエラー
 */
stocks.post('/:stock_code', async (c) => {
  const userId = c.get('jwtPayload').sub
  const stockCode = c.req.param('stock_code')

  try {
    const body = await c.req.json()
    if (body.stock_code !== stockCode) {
      return formatResponse(c, { error: '株式コードが一致しません' }, 400)
    }

    // ユーザーIDを付与して登録
    await putStock(c, { ...body, user_id: userId })
    return formatResponse(c, { data: { success: true } }, 201)

  } catch (error) {
    console.error(`[${stockCode}] 登録失敗:`, error)
    const status = error.message.includes('ConditionalCheckFailed') ? 409 : 500
    return formatResponse(c, { error: '登録処理に失敗しました' }, status)
  }
})

/**
 * 株式情報を削除
 * @route DELETE /:stock_code
 * @param {string} stock_code - 株式コード（URLパラメータ）
 * @returns 削除成功フラグ
 * @error 404 - データ不存在
 * @error 500 - サーバーエラー
 */
stocks.delete('/:stock_code', async (c) => {
  const userId = c.get('jwtPayload').sub
  const stockCode = c.req.param('stock_code')

  try {
    await deleteStock(c, userId, stockCode)
    return formatResponse(c, { data: { success: true } })
  } catch (error) {
    console.error(`[${stockCode}] 削除失敗:`, error)
    return formatResponse(c, { error: '削除処理に失敗しました' }, 500)
  }
})

export default stocks
