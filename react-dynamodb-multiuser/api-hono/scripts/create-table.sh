#!/bin/bash
set -eo pipefail

# 必須環境変数チェック
required_vars=("DYNAMODB_ENDPOINT" "USERS_TABLE" "STOCKS_TABLE")
for var in "${required_vars[@]}"; do
  if [[ -z "${!var}" ]]; then
    echo "ERROR: $var が設定されていません" >&2
    exit 1
  fi
done

# 既存テーブル削除（存在しない場合は無視）
echo "🗑️ 既存テーブル削除試行: ${USERS_TABLE}"
aws dynamodb delete-table \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${USERS_TABLE}" \
  2>/dev/null || true

echo "🗑️ 既存テーブル削除試行: ${STOCKS_TABLE}"
aws dynamodb delete-table \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${STOCKS_TABLE}" \
  2>/dev/null || true

# USERS_TABLE作成
echo "🛠️ ユーザーテーブル作成: ${USERS_TABLE}"
aws dynamodb create-table \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${USERS_TABLE}" \
  --attribute-definitions \
    AttributeName=user_id,AttributeType=S \
  --key-schema \
    AttributeName=user_id,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST

# STOCKS_TABLE作成（複合キー＋GSI）
echo "🛠️ 在庫テーブル作成: ${STOCKS_TABLE}"
aws dynamodb create-table \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${STOCKS_TABLE}" \
  --attribute-definitions \
    AttributeName=user_id,AttributeType=S \
    AttributeName=stock_code,AttributeType=S \
    AttributeName=category,AttributeType=S \
  --key-schema \
    AttributeName=user_id,KeyType=HASH \
    AttributeName=stock_code,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST \
  --global-secondary-indexes \
    '[
      {
        "IndexName": "CategoryIndex",
        "KeySchema": [{"AttributeName":"category","KeyType":"HASH"}],
        "Projection": {"ProjectionType":"ALL"}
      }
    ]'

# テーブル作成完了まで待機
echo "⏳ ユーザーテーブル準備中..."
aws dynamodb wait table-exists \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${USERS_TABLE}"

echo "⏳ 在庫テーブル準備中..."
aws dynamodb wait table-exists \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${STOCKS_TABLE}"

echo "✅ テーブル作成完了:"
echo "  - USERS_TABLE: ${USERS_TABLE}"
echo "  - STOCKS_TABLE: ${STOCKS_TABLE}"
