#!/bin/bash
set -eo pipefail

# 必須環境変数チェック
required_vars=("DYNAMODB_ENDPOINT" "STOCKS_TABLE")
for var in "${required_vars[@]}"; do
  if [[ -z "${!var}" ]]; then
    echo "ERROR: $var が設定されていません" >&2
    exit 1
  fi
done

USER_ID="115321431317696214428"

# サンプルデータ（5件）
declare -A sample_stocks=(
  ["7203"]="Toyota Motor Corporation,Automotive,100,2024-01-15"
  ["9984"]="SoftBank Group,IT,50,2024-02-20"
  ["6861"]="Keyence,Electronics,30,2024-03-10"
  ["2702"]="McDonald's Holdings Japan,Food,200,2024-04-01"
  ["4755"]="Rakuten Group,IT,80,2024-04-25"
)

# データ登録処理
echo "📝 サンプルデータ登録開始: ${STOCKS_TABLE}"
for stock_code in "${!sample_stocks[@]}"; do
  IFS=',' read -r stock_name category quantity purchase_date <<< "${sample_stocks[$stock_code]}"

  aws dynamodb put-item \
    --endpoint-url "${DYNAMODB_ENDPOINT}" \
    --table-name "${STOCKS_TABLE}" \
    --item '{
      "user_id": {"S": "'"${USER_ID}"'"},
      "stock_code": {"S": "'"${stock_code}"'"},
      "stock_name": {"S": "'"${stock_name}"'"},
      "category": {"S": "'"${category}"'"},
      "quantity": {"N": "'"${quantity}"'"},
      "purchase_date": {"S": "'"${purchase_date}"'"}
    }' \
    --return-consumed-capacity TOTAL

  echo "  ✅ ${stock_code}: ${stock_name}"
done

echo "🎉 サンプルデータ登録完了（登録件数: ${#sample_stocks[@]}）"