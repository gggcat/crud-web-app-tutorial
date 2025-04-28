import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocument,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb'

/**
 * 環境変数インターフェース
 */
interface Env {
  DYNAMODB_ENDPOINT: string
  DYNAMODB_TABLE: string
  AWS_ACCESS_KEY_ID: string
  AWS_SECRET_ACCESS_KEY: string
}

/**
 * APIレスポンス標準形式
 */
interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  metadata?: {
    requestId: string
    timestamp: string
    durationMs?: number
  }
}

/**
 * DynamoDB DocumentClientを初期化する
 * @param env 環境変数
 * @returns 初期化済みDynamoDB DocumentClient
 */
const initializeDynamoClient = (env: Env) => {
  const baseClient = new DynamoDBClient({
    endpoint: env.DYNAMODB_ENDPOINT,
    region: 'local',
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  })
  return DynamoDBDocument.from(baseClient, {
    marshallOptions: {
      removeUndefinedValues: true,
      convertEmptyValues: false,
      convertClassInstanceToMap: true,
    },
    unmarshallOptions: {
      wrapNumbers: false,
    },
  })
}

/**
 * APIエントリポイント
 */
export default {
  /**
   * リクエストハンドラ
   * @param request リクエスト
   * @param env 環境変数
   */
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORSプリフライト対応
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }

    const client = initializeDynamoClient(env)
    const url = new URL(request.url)
    const requestId = crypto.randomUUID()
    const startTime = Date.now()

    // リクエストログ
    console.info(`[${new Date().toISOString()}] Incoming request`, {
      method: request.method,
      path: url.pathname,
      requestId,
    })

    try {
      // ルートごとのハンドラを定義
      const routeHandlers: Record<string, RouteHandler> = {
        stocks: handleStockRequests,
        // ここにルートを追加可能
      }
      const routeKey = url.pathname.split('/')[1] ?? ''
      const handler = routeHandlers[routeKey]

      if (!handler) {
        return formatResponse(
          { error: 'Route not found' },
          404,
          requestId,
          startTime
        )
      }
      return await handler(request, client, env, url, requestId, startTime)
    } catch (error) {
      console.error(`[${requestId}] Error:`, error)
      return formatResponse(
        { error: 'Internal server error' },
        500,
        requestId,
        startTime
      )
    }
  },
}

/**
 * ルートハンドラ型
 */
type RouteHandler = (
  request: Request,
  client: DynamoDBDocument,
  env: Env,
  url: URL,
  requestId: string,
  startTime: number
) => Promise<Response>

/**
 * /stocks系リクエストのハンドラ
 */
const handleStockRequests: RouteHandler = async (
  request,
  client,
  env,
  url,
  requestId,
  startTime
) => {
  const pathParts = url.pathname.split('/').filter(Boolean) // ['', 'stocks', '{stock_code}'] → ['stocks', '{stock_code}']
  const isStocksRoot = pathParts.length === 1 && pathParts[0] === 'stocks'
  const stockCode = pathParts[1] ?? ''

  // GETメソッド
  if (request.method === 'GET') {
    if (isStocksRoot) {
      return handleListStocks(request, client, env, url, requestId, startTime)
    } else if (stockCode) {
      return handleGetStock(stockCode, request, client, env, requestId, startTime)
    } else {
      return formatResponse({ error: 'Not found' }, 404, requestId, startTime)
    }
  }

  // GET以外のメソッド
  const methodHandlers: Record<string, StockMethodHandler> = {
    POST: handleCreateStock,
    PUT: handleUpdateStock,
    DELETE: handleDeleteStock,
  }
  const handler = methodHandlers[request.method]
  if (!handler) {
    return formatResponse({ error: 'Method not allowed' }, 405, requestId, startTime)
  }
  return handler(stockCode, request, client, env, requestId, startTime)
}

/**
 * 在庫取得（1件）
 */
const handleGetStock: StockMethodHandler = async (
  stockCode,
  _request,
  client,
  env,
  requestId,
  startTime
) => {
  if (!stockCode) {
    return formatResponse({ error: 'Stock code required' }, 400, requestId, startTime)
  }
  const { Item } = await client.send(
    new GetCommand({
      TableName: env.DYNAMODB_TABLE,
      Key: { stock_code: stockCode },
    })
  )
  return Item
    ? formatResponse({ data: Item }, 200, requestId, startTime)
    : formatResponse({ error: 'Stock not found' }, 404, requestId, startTime)
}

/**
 * 在庫一覧取得（フィルタ・ソート・ページネーション対応）
 */
const handleListStocks = async (
  request: Request,
  client: DynamoDBDocument,
  env: Env,
  url: URL,
  requestId: string,
  startTime: number
): Promise<Response> => {
  const params = url.searchParams
  const limit = parseInt(params.get('limit') || '20', 10)
  const offset = parseInt(params.get('offset') || '0', 10)
  const page = parseInt(params.get('page') || '1', 10)
  const effectiveOffset = params.has('offset') ? offset : (page - 1) * limit

  // フィルタ条件
  const nameFilter = params.get('name')
  const categoryFilter = params.get('category')

  // ソート条件
  const sortParam = params.get('sort') || ''
  const sortFields = sortParam.split(',').filter(f => f)

  // DynamoDB Scan用パラメータ構築
  let filterExpression = ''
  let expressionAttributeNames: Record<string, string> = {}
  let expressionAttributeValues: Record<string, any> = {}

  if (nameFilter) {
    filterExpression += '#name = :name'
    expressionAttributeNames['#name'] = 'stock_name'
    expressionAttributeValues[':name'] = nameFilter
  }
  if (categoryFilter) {
    if (filterExpression) filterExpression += ' AND '
    filterExpression += '#category = :category'
    expressionAttributeNames['#category'] = 'category'
    expressionAttributeValues[':category'] = categoryFilter
  }

  const scanParams: any = {
    TableName: env.DYNAMODB_TABLE,
  }
  if (filterExpression) {
    scanParams.FilterExpression = filterExpression
    scanParams.ExpressionAttributeNames = expressionAttributeNames
    scanParams.ExpressionAttributeValues = expressionAttributeValues
  }

  // データ取得
  const scanResult = await client.scan(scanParams)
  let items = scanResult.Items || []

  // ソート（アプリ側で実施）
  if (sortFields.length > 0) {
    items.sort((a, b) => {
      for (const field of sortFields) {
        let desc = false
        let key = field
        if (field.startsWith('-')) {
          desc = true
          key = field.substring(1)
        }
        if (a[key] < b[key]) return desc ? 1 : -1
        if (a[key] > b[key]) return desc ? -1 : 1
      }
      return 0
    })
  }

  // ページネーション
  const total = items.length
  const pagedItems = items.slice(effectiveOffset, effectiveOffset + limit)

  // レスポンス構築
  return formatResponse(
    {
      data: pagedItems,
      metadata: {
        requestId,
        timestamp: new Date().toISOString(),
        durationMs: Date.now() - startTime,
      },
      pagination: {
        limit,
        offset: effectiveOffset,
        total,
      },
    },
    200,
    requestId,
    startTime
  )
}

/**
 * 在庫登録（新規作成）
 */
const handleCreateStock: StockMethodHandler = async (
  stockCode,
  request,
  client,
  env,
  requestId,
  startTime
) => {
  const body = await request.json()
  if (!body.stock_code || body.stock_code !== stockCode) {
    return formatResponse({ error: 'Stock code mismatch' }, 400, requestId, startTime)
  }
  await client.send(
    new PutCommand({
      TableName: env.DYNAMODB_TABLE,
      Item: body,
      ConditionExpression: 'attribute_not_exists(stock_code)',
    })
  )
  return formatResponse({ data: { success: true } }, 201, requestId, startTime)
}

/**
 * 在庫更新（PUT）
 */
const handleUpdateStock: StockMethodHandler = async (
  stockCode,
  request,
  client,
  env,
  requestId,
  startTime
) => {
  const body = await request.json()
  if (!body.stock_code || body.stock_code !== stockCode) {
    return formatResponse(
      { error: 'Stock code in path and body must match' },
      400,
      requestId,
      startTime
    )
  }

  // 更新フィールド抽出
  const { stock_name, quantity, ...otherAttributes } = body
  let updateExpression = 'SET '
  const expressionAttributeValues: Record<string, any> = {}
  const expressionAttributeNames: Record<string, string> = {}
  let firstAttribute = true

  if (stock_name !== undefined) {
    updateExpression += `${firstAttribute ? '' : ', '}#n = :n`
    expressionAttributeNames['#n'] = 'stock_name'
    expressionAttributeValues[':n'] = stock_name
    firstAttribute = false
  }
  if (quantity !== undefined) {
    updateExpression += `${firstAttribute ? '' : ', '}#q = :q`
    expressionAttributeNames['#q'] = 'quantity'
    expressionAttributeValues[':q'] = quantity
    firstAttribute = false
  }
  // 他属性の動的追加（必要に応じて有効化）
  // for (const [key, value] of Object.entries(otherAttributes)) {
  //   const namePlaceholder = `#attr_${key}`
  //   const valuePlaceholder = `:val_${key}`
  //   updateExpression += `${firstAttribute ? '' : ', '}${namePlaceholder} = ${valuePlaceholder}`
  //   expressionAttributeNames[namePlaceholder] = key
  //   expressionAttributeValues[valuePlaceholder] = value
  //   firstAttribute = false
  // }

  if (firstAttribute) {
    return formatResponse({ error: 'No fields to update provided' }, 400, requestId, startTime)
  }

  try {
    await client.send(
      new UpdateCommand({
        TableName: env.DYNAMODB_TABLE,
        Key: { stock_code: stockCode },
        UpdateExpression: updateExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        ExpressionAttributeValues: expressionAttributeValues,
        ConditionExpression: 'attribute_exists(stock_code)',
        ReturnValues: 'UPDATED_NEW',
      })
    )
    return formatResponse({ data: { success: true } }, 200, requestId, startTime)
  } catch (error: any) {
    if (error.name === 'ConditionalCheckFailedException') {
      return formatResponse({ error: 'Stock not found for update' }, 404, requestId, startTime)
    }
    console.error(`[UpdateStock Error - ${stockCode}]`, error)
    return formatResponse({ error: 'Failed to update stock' }, 500, requestId, startTime)
  }
}

/**
 * 在庫削除
 */
const handleDeleteStock: StockMethodHandler = async (
  stockCode,
  _request,
  client,
  env,
  requestId,
  startTime
) => {
  try {
    const { Attributes } = await client.send(
      new DeleteCommand({
        TableName: env.DYNAMODB_TABLE,
        Key: { stock_code: stockCode },
        ReturnValues: 'ALL_OLD',
      })
    )
    return Attributes
      ? formatResponse({ data: { success: true } }, 200, requestId, startTime)
      : formatResponse({ error: 'Stock not found' }, 404, requestId, startTime)
  } catch (error) {
    console.error(`[Delete Error - ${stockCode}]`, error)
    return formatResponse({ error: 'Deletion failed' }, 500, requestId, startTime)
  }
}

/**
 * レスポンスフォーマット統一関数
 * @param data レスポンスデータ
 * @param status ステータスコード
 * @param requestId リクエストID
 * @param startTime 開始時刻
 */
function formatResponse<T>(
  data: ApiResponse<T>,
  status: number = 200,
  requestId?: string,
  startTime?: number
): Response {
  const responseBody: ApiResponse<T> = {
    ...data,
    metadata: {
      requestId: requestId || 'N/A',
      timestamp: new Date().toISOString(),
      ...(startTime && { durationMs: Date.now() - startTime }),
    },
  }
  return new Response(JSON.stringify(responseBody), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

/**
 * 在庫操作メソッドハンドラ型
 */
type StockMethodHandler = (
  stockCode: string,
  request: Request,
  client: DynamoDBDocument,
  env: Env,
  requestId: string,
  startTime: number
) => Promise<Response>
