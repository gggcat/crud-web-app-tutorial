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
    picture?: string // 画像URLパラメータを追加
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

    if (existingUser) {
      // ユーザーが存在する場合は、プロフィール画像やその他情報を更新
      if (
        params.picture &&
        (!existingUser.picture || existingUser.picture !== params.picture)
      ) {
        // プロフィール画像が変更された場合は更新
        await client.update({
          TableName: USERS_TABLE,
          Key: { user_id: params.providerId },
          UpdateExpression: 'SET picture = :picture, updated_at = :updated_at',
          ExpressionAttributeValues: {
            ':picture': params.picture,
            ':updated_at': new Date().toISOString()
          }
        });

        // 返却オブジェクトも更新
        existingUser.picture = params.picture;
        existingUser.updated_at = new Date().toISOString();
      }
      return existingUser as User;
    }

    // 新規ユーザー作成
    const newUser: User = {
      user_id: params.providerId,
      email: params.email.toLowerCase(),
      name: params.name,
      picture: params.picture || null, // プロフィール画像を保存
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

/**
 * プロバイダIDからユーザー情報を取得
 * @param c Honoコンテキスト
 * @param providerId 認証プロバイダのユーザーID（Google IDなど）
 * @returns ユーザー情報またはnull
 */
export const getUserByProviderId = async (
  c: Context,
  providerId: string
): Promise<User | null> => {
  const { USERS_TABLE } = env<Env['Bindings']>(c)

  if (!USERS_TABLE) {
    throw new Error('USERS_TABLEが環境変数に設定されていません')
  }

  // dynamodb.tsのクライアントを取得
  const client = getDynamoClient(c)

  console.log(`user id = [${providerId}] !!!!!!!`)

  try {
    const { Item: user } = await client.get({
      TableName: USERS_TABLE,
      Key: { user_id: providerId },
      ConsistentRead: true
    })
    console.log(`[${user}] !!!!!!!`)
    return user ? user as User : null
  } catch (error) {
    console.error(`[${providerId}] ユーザー情報取得エラー:`, error)
    throw new Error('ユーザー情報取得に失敗しました')
  }
}