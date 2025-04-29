import { Hono } from 'hono'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocument,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb'

type Env = {
  DYNAMODB_ENDPOINT: string
  DYNAMODB_TABLE: string
  AWS_ACCESS_KEY_ID: string
  AWS_SECRET_ACCESS_KEY: string
}

type ApiResponse<T = unknown> = {
  data?: T
  error?: string
  metadata?: {
    requestId: string
    timestamp: string
    durationMs?: number
  }
  pagination?: any
}

// DynamoDBクライアント初期化
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
    marshallOptions: { removeUndefinedValues: true },
    unmarshallOptions: { wrapNumbers: false },
  })
}

// レスポンスフォーマット
function formatResponse<T>(
  c: any,
  data: ApiResponse<T>,
  status: number = 200,
  requestId?: string,
  startTime?: number
) {
  const responseBody: ApiResponse<T> = {
    ...data,
    metadata: {
      requestId: requestId || 'N/A',
      timestamp: new Date().toISOString(),
      ...(startTime && { durationMs: Date.now() - startTime }),
    },
  }
  return c.json(responseBody, status)
}

const app = new Hono<{ Bindings: Env }>({
  strict: true  // 厳密なルーティングモード
})

// CORSミドルウェア
app.use('*', async (c, next) => {
  c.res.headers.set('Access-Control-Allow-Origin', '*')
  c.res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  c.res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  if (c.req.method === 'OPTIONS') return c.text('', 204)
  await next()
})

// 末尾スラッシュリダイレクト
app.get('/stocks/', (c) => c.redirect('/stocks', 301))
app.get('/stocks/:stock_code/', (c) => {
  const code = c.req.param('stock_code')
  return c.redirect(`/stocks/${code}`, 301)
})

// stocks一覧取得
app.get('/stocks', async (c) => {
  const env = c.env
  const client = initializeDynamoClient(env)
  const url = new URL(c.req.url)
  const params = url.searchParams
  const limit = parseInt(params.get('limit') || '20', 10)
  const offset = parseInt(params.get('offset') || '0', 10)
  const page = parseInt(params.get('page') || '1', 10)
  const effectiveOffset = params.has('offset') ? offset : (page - 1) * limit

  // フィルタ・ソートは省略（必要なら既存ロジックを流用）

  const scanResult = await client.scan({ TableName: env.DYNAMODB_TABLE })
  const items = scanResult.Items || []
  const total = items.length
  const pagedItems = items.slice(effectiveOffset, effectiveOffset + limit)
  const requestId = crypto.randomUUID()
  const startTime = Date.now()

  return formatResponse(
    c,
    {
      data: pagedItems,
      pagination: { limit, offset: effectiveOffset, total },
    },
    200,
    requestId,
    startTime
  )
})

// stocks個別取得
app.get('/stocks/:stock_code', async (c) => {
  const env = c.env
  const client = initializeDynamoClient(env)
  const stockCode = c.req.param('stock_code')
  const requestId = crypto.randomUUID()
  const startTime = Date.now()
  const { Item } = await client.send(
    new GetCommand({
      TableName: env.DYNAMODB_TABLE,
      Key: { stock_code: stockCode },
    })
  )
  if (!Item) {
    return formatResponse(c, { error: 'Stock not found' }, 404, requestId, startTime)
  }
  return formatResponse(c, { data: Item }, 200, requestId, startTime)
})

// stocks新規作成
app.post('/stocks/:stock_code', async (c) => {
  const env = c.env
  const client = initializeDynamoClient(env)
  const stockCode = c.req.param('stock_code')
  const requestId = crypto.randomUUID()
  const startTime = Date.now()
  const body = await c.req.json()
  if (!body.stock_code || body.stock_code !== stockCode) {
    return formatResponse(c, { error: 'Stock code mismatch' }, 400, requestId, startTime)
  }
  await client.send(
    new PutCommand({
      TableName: env.DYNAMODB_TABLE,
      Item: body,
      ConditionExpression: 'attribute_not_exists(stock_code)',
    })
  )
  return formatResponse(c, { data: { success: true } }, 201, requestId, startTime)
})

// stocks更新
app.put('/stocks/:stock_code', async (c) => {
  const env = c.env
  const client = initializeDynamoClient(env)
  const stockCode = c.req.param('stock_code')
  const requestId = crypto.randomUUID()
  const startTime = Date.now()
  const body = await c.req.json()
  if (!body.stock_code || body.stock_code !== stockCode) {
    return formatResponse(c, { error: 'Stock code in path and body must match' }, 400, requestId, startTime)
  }
  // 必要な更新フィールド抽出とUpdateExpression生成は既存ロジックを流用
  // ここでは例としてstock_nameとquantityのみ
  const { stock_name, quantity } = body
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
  if (firstAttribute) {
    return formatResponse(c, { error: 'No fields to update provided' }, 400, requestId, startTime)
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
    return formatResponse(c, { data: { success: true } }, 200, requestId, startTime)
  } catch (error: any) {
    if (error.name === 'ConditionalCheckFailedException') {
      return formatResponse(c, { error: 'Stock not found for update' }, 404, requestId, startTime)
    }
    return formatResponse(c, { error: 'Failed to update stock' }, 500, requestId, startTime)
  }
})

// stocks削除
app.delete('/stocks/:stock_code', async (c) => {
  const env = c.env
  const client = initializeDynamoClient(env)
  const stockCode = c.req.param('stock_code')
  const requestId = crypto.randomUUID()
  const startTime = Date.now()
  try {
    const { Attributes } = await client.send(
      new DeleteCommand({
        TableName: env.DYNAMODB_TABLE,
        Key: { stock_code: stockCode },
        ReturnValues: 'ALL_OLD',
      })
    )
    return Attributes
      ? formatResponse(c, { data: { success: true } }, 200, requestId, startTime)
      : formatResponse(c, { error: 'Stock not found' }, 404, requestId, startTime)
  } catch (error) {
    return formatResponse(c, { error: 'Deletion failed' }, 500, requestId, startTime)
  }
})

export default app
