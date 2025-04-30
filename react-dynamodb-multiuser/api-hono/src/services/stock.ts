// src/services/stock.ts
import { getDynamoClient } from './dynamodb'
import type { Stock } from '../types/stock'
import { env } from 'hono/adapter'
import type { Context } from 'hono'

/**
 * DynamoDBストックアイテムのプライマリキー構造
 * @property user_id - ユーザー識別子（パーティションキー）
 * @property stock_code - 株式コード（ソートキー）
 */
interface StockKey {
  user_id: string
  stock_code: string
}

/**
 * ユーザー所有の全株式を取得
 * @param c Honoコンテキスト
 * @param userId ユーザーID
 * @returns 株式情報の配列
 * @throws データ取得失敗時
 */
export const getStocksByUser = async (c: Context, userId: string): Promise<Stock[]> => {
  const { STOCKS_TABLE } = env<{ STOCKS_TABLE: string }>(c)
  const client = getDynamoClient(c)

  try {
    const items: Stock[] = []
    let lastEvaluatedKey: Record<string, any> | undefined

    // ページネーション対応のクエリ実行
    do {
      const result = await client.query({
        TableName: STOCKS_TABLE,
        KeyConditionExpression: 'user_id = :uid',
        ExpressionAttributeValues: { ':uid': userId },
        ExclusiveStartKey: lastEvaluatedKey,
        Limit: 100 // 1回のクエリで最大100件取得
      })

      if (result.Items) {
        items.push(...result.Items.map(item => validateStock(item)))
      }
      lastEvaluatedKey = result.LastEvaluatedKey
    } while (lastEvaluatedKey) // 全データ取得までループ

    return items
  } catch (error) {
    console.error(`[${userId}] 株式一覧取得エラー:`, error)
    throw new Error(`ユーザー ${userId} の株式データ取得に失敗しました`)
  }
}

/**
 * 特定株式の詳細情報を取得
 * @param c Honoコンテキスト
 * @param userId ユーザーID
 * @param stockCode 株式コード
 * @returns 株式情報またはnull
 * @throws データ取得失敗時
 */
export const getStock = async (c: Context, userId: string, stockCode: string): Promise<Stock | null> => {
  const { STOCKS_TABLE } = env<{ STOCKS_TABLE: string }>(c)
  const client = getDynamoClient(c)

  try {
    const key: StockKey = {
      user_id: userId,
      stock_code: stockCode
    }

    const result = await client.get({
      TableName: STOCKS_TABLE,
      Key: key
    })

    return result.Item ? validateStock(result.Item) : null
  } catch (error) {
    console.error(`[${stockCode}] 株式詳細取得エラー:`, error)
    throw new Error(`株式 ${stockCode} の詳細取得に失敗しました`)
  }
}

/**
 * 新規株式情報を登録
 * @param c Honoコンテキスト
 * @param stock 株式データ
 * @throws 重複登録時/データ不整合時
 */
export const createStock = async (c: Context, stock: Stock) => {
  const { STOCKS_TABLE } = env<{ STOCKS_TABLE: string }>(c)
  const client = getDynamoClient(c)

  try {
    await client.put({
      TableName: STOCKS_TABLE,
      Item: validateStock(stock),
      // 既存データの上書き防止（ユニーク制約）
      ConditionExpression: 'attribute_not_exists(user_id) AND attribute_not_exists(stock_code)'
    })
  } catch (error) {
    console.error(`[${stock.stock_code}] 株式登録エラー:`, error)
    throw new Error(`株式 ${stock.stock_code} の登録に失敗しました（重複可能性あり）`)
  }
}

/**
 * 株式情報更新（UPDATE操作）
 * @param c Honoコンテキスト
 * @param userId ユーザーID
 * @param stockCode 株式コード
 * @param updateData 更新データ
 * @throws 更新失敗時
 */
export const updateStock = async (c: Context, stock: Stock) => {
  const { STOCKS_TABLE } = env<{ STOCKS_TABLE: string }>(c)
  const client = getDynamoClient(c)

  try {
    await client.put({
      TableName: STOCKS_TABLE,
      Item: validateStock(stock),
    })
  } catch (error) {
    console.error(`[${stock.stock_code}] 株式登録エラー:`, error)
    throw new Error(`株式 ${stock.stock_code} の登録に失敗しました（重複可能性あり）`)
  }
}

/**
 * 株式情報を削除
 * @param c Honoコンテキスト
 * @param userId ユーザーID
 * @param stockCode 株式コード
 * @throws 無効なパラメータ時/削除失敗時
 */
export const deleteStock = async (c: Context, userId: string, stockCode: string) => {
  const { STOCKS_TABLE } = env<{ STOCKS_TABLE: string }>(c)
  const client = getDynamoClient(c)

  if (!userId || !stockCode) {
    throw new Error(`無効な削除パラメータ userId:${userId}, stockCode:${stockCode}`)
  }

  try {
    const key: StockKey = {
      user_id: userId,
      stock_code: stockCode
    }

    await client.delete({
      TableName: STOCKS_TABLE,
      Key: key
    })
  } catch (error) {
    console.error(`[${stockCode}] 株式削除エラー:`, error)
    throw new Error(`株式 ${stockCode} の削除に失敗しました`)
  }
}

/**
 * 株式データのバリデーションと型チェック
 * @param item DynamoDBから取得した生データ
 * @returns 検証済み株式データ
 * @throws 必須項目欠損時
 */
const validateStock = (item: unknown): Stock => {
  const stock = item as Stock

  // 必須項目チェック
  if (!stock?.user_id || !stock?.stock_code) {
    throw new Error(
      `無効な株式データ形式: ${JSON.stringify(item)}`
    )
  }

  return stock
}
