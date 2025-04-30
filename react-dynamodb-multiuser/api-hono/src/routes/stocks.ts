import { Hono } from 'hono'
import { formatResponse } from '../utils/response'
import { getStocksByUser, getStock, createStock, updateStock, deleteStock } from '../services/stock'

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
 * ユーザー所有の全株式を取得（ページネーション対応）
 * @route GET /
 * @query limit {number} 1ページあたりの件数（デフォルト20）
 * @query offset {number} 開始位置（デフォルト0）
 * @query page {number} ページ番号（offsetと併用不可、1始まり）
 * @returns {Stock[]} 株式情報の配列
 * @error 401 - 認証エラー
 * @error 500 - サーバーエラー
 */
stocks.get('/', async (c) => {
  const userId = c.get('jwtPayload').sub
  try {
    // ページネーションパラメータ取得
    const url = new URL(c.req.url)
    const params = url.searchParams
    const limit = parseInt(params.get('limit') || '20', 10)
    const offset = parseInt(params.get('offset') || '0', 10)
    const page = parseInt(params.get('page') || '1', 10)
    // offset優先、なければpage→offset算出
    const effectiveOffset = params.has('offset') ? offset : (page - 1) * limit

    // 全件取得（本番はQuery推奨）
    const userStocks = await getStocksByUser(c, userId)
    const total = userStocks.length
    const pagedStocks = userStocks.slice(effectiveOffset, effectiveOffset + limit)

    return formatResponse(c, {
      data: pagedStocks,
      pagination: {
        limit,
        offset: effectiveOffset,
        total,
        page: Math.floor(effectiveOffset / limit) + 1,
        totalPages: Math.ceil(total / limit),
      },
    })
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
    await createStock(c, { ...body, user_id: userId })
    return formatResponse(c, { data: { success: true } }, 201)

  } catch (error) {
    console.error(`[${stockCode}] 登録失敗:`, error)
    const status = error.message.includes('ConditionalCheckFailed') ? 409 : 500
    return formatResponse(c, { error: '登録処理に失敗しました' }, status)
  }
})

/**
 * 株式情報を更新
 * @route PUT /:stock_code
 * @param {string} stock_code - 株式コード（URLパラメータ）
 * @body {Stock} 更新データ
 * @returns 更新成功フラグ
 * @error 400 - パラメータ不整合
 * @error 404 - データ不存在
 * @error 500 - サーバーエラー
 */
stocks.put('/:stock_code', async (c) => {
  const userId = c.get('jwtPayload').sub
  const stockCode = c.req.param('stock_code')

  try {
    const body = await c.req.json()
    // パスパラメータとリクエストボディの整合性チェック
    if (body.stock_code !== stockCode) {
      return formatResponse(c, { error: '株式コードが一致しません' }, 400)
    }

    // ユーザーIDで所有権を確認して更新
    const existingStock = await getStock(c, userId, stockCode)
    if (!existingStock) {
      return formatResponse(c, { error: '更新対象が見つかりません' }, 404)
    }

    await updateStock(c, { ...body, user_id: userId })
    return formatResponse(c, { data: { success: true } })

  } catch (error) {
    console.error(`[${stockCode}] 更新失敗:`, error)
    const status = error.message.includes('ConditionalCheckFailed') ? 404 : 500
    return formatResponse(c, { error: '更新処理に失敗しました' }, status)
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
