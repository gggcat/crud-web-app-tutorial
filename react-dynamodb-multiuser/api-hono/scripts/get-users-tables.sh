#!/bin/bash
set -eo pipefail

# 必須環境変数チェック
if [[ -z "${DYNAMODB_ENDPOINT}" || -z "${USERS_TABLE}" ]]; then
  echo "ERROR: DYNAMODB_ENDPOINT または USERS_TABLE が設定されていません" >&2
  exit 1
fi

echo "📋 ${USERS_TABLE} テーブルの内容を表示します..."

# DynamoDBのテーブル内容を全て取得して表示
aws dynamodb scan \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${USERS_TABLE}" \
  --output json

echo "✅ ${USERS_TABLE} の表示が完了しました"
