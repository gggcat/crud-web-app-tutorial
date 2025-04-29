// src/services/dynamodb.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { env } from 'hono/adapter'
import type { Context } from 'hono'
import type { Env } from '../types/env' // プロジェクト全体の型をインポート

export const getDynamoClient = (c: Context) => {
  // 正しい環境変数名を使用
  const {
    AWS_REGION,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    DYNAMODB_ENDPOINT
  } = env<Env['Bindings']>(c)

  // 必須チェック
  if (!AWS_REGION) {
    throw new Error('AWS_REGIONが環境変数に設定されていません')
  }

    // エンドポイント設定の最適化
    const endpointOptions = DYNAMODB_ENDPOINT
    ? {
        endpoint: DYNAMODB_ENDPOINT,
        tls: false // カスタムエンドポイント使用時はTLS無効化
      }
    : {
        tls: true // デフォルトはTLS有効
      }

  const client = new DynamoDBClient({
    region: AWS_REGION,
    ...(AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY ? {
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
      }
    } : {}),
    maxAttempts: 3,
    ...endpointOptions
  })

  return DynamoDBDocument.from(client, {
    marshallOptions: {
      removeUndefinedValues: true,
      convertClassInstanceToMap: true
    }
  })
}
