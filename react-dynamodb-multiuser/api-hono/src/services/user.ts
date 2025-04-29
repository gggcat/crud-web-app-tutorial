import { env } from 'hono/adapter'
import type { Context } from 'hono'
import type { User } from '../types/user'
import type { Env } from '../types/env'
import { getDynamoClient } from './dynamodb' // dynamodb.tsからクライアントをインポート

export const createOrGetUser = async (
  c: Context,
  params: {
    provider: string
    providerId: string
    email: string
    name: string
  }
): Promise<User> => {
  const { USERS_TABLE } = env<Env['Bindings']>(c)

  if (!USERS_TABLE) {
    throw new Error('USERS_TABLEが環境変数に設定されていません')
  }

  // dynamodb.tsのクライアントを取得
  const client = getDynamoClient(c)

  try {
    const { Item: existingUser } = await client.get({
      TableName: USERS_TABLE,
      Key: { user_id: params.providerId },
      ConsistentRead: true
    })

    if (existingUser) return existingUser as User

    const newUser: User = {
      user_id: params.providerId,
      email: params.email.toLowerCase(),
      name: params.name,
      providers: [params.provider],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    await client.put({
      TableName: USERS_TABLE,
      Item: newUser,
      ConditionExpression: 'attribute_not_exists(user_id)'
    })

    return newUser
  } catch (error) {
    console.error('DynamoDB操作エラー:', error)
    throw new Error('ユーザー処理に失敗しました')
  }
}
