#!/bin/bash
set -eo pipefail  # 厳格なエラーチェック

# 環境変数チェック
required_vars=("DYNAMODB_ENDPOINT" "DYNAMODB_TABLE")
for var in "${required_vars[@]}"; do
  if [[ -z "${!var}" ]]; then
    echo "ERROR: $var is not set" >&2
    exit 1
  fi
done

# テーブル削除（存在しない場合は無視）
echo "🗑️ 既存テーブル削除試行..."
aws dynamodb delete-table \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${DYNAMODB_TABLE}" \
  2>/dev/null || true

# テーブル作成
echo "🛠️ 新規テーブル作成..."
aws dynamodb create-table \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${DYNAMODB_TABLE}" \
  --attribute-definitions \
    AttributeName=stock_code,AttributeType=S \
    AttributeName=category,AttributeType=S \
  --key-schema \
    AttributeName=stock_code,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --global-secondary-indexes \
    '[
      {
        "IndexName": "CategoryIndex",
        "KeySchema": [{"AttributeName":"category","KeyType":"HASH"}],
        "Projection": {"ProjectionType":"ALL"}
      }
    ]'

# テーブル準備完了待機
echo "⏳ テーブル準備中..."
aws dynamodb wait table-exists \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${DYNAMODB_TABLE}"

# テストデータ投入
echo "📝 テストデータ投入..."
items=(
  '{"stock_code": {"S": "1001"}, "stock_name": {"S": "株式会社テストホールディングス"}, "category": {"S": "IT"}, "quantity": {"N": "1000"}, "price": {"N": "2500"}}'
  '{"stock_code": {"S": "1002"}, "stock_name": {"S": "サンプル株式会社"}, "category": {"S": "製造"}, "quantity": {"N": "500"}, "price": {"N": "1800"}}'
  '{"stock_code": {"S": "1003"}, "stock_name": {"S": "テクノロジーカンパニー"}, "category": {"S": "IT"}, "quantity": {"N": "750"}, "price": {"N": "3200"}}'
  '{"stock_code": {"S": "1004"}, "stock_name": {"S": "グローバルトレーディング"}, "category": {"S": "貿易"}, "quantity": {"N": "300"}, "price": {"N": "4500"}}'
  '{"stock_code": {"S": "1005"}, "stock_name": {"S": "未来創造社"}, "category": {"S": "サービス"}, "quantity": {"N": "120"}, "price": {"N": "2100"}}'
  '{"stock_code": {"S": "1006"}, "stock_name": {"S": "エコロジー産業"}, "category": {"S": "環境"}, "quantity": {"N": "950"}, "price": {"N": "1700"}}'
  '{"stock_code": {"S": "1007"}, "stock_name": {"S": "ファイナンスパートナーズ"}, "category": {"S": "金融"}, "quantity": {"N": "620"}, "price": {"N": "3900"}}'
  '{"stock_code": {"S": "1008"}, "stock_name": {"S": "日本食品"}, "category": {"S": "食品"}, "quantity": {"N": "400"}, "price": {"N": "1100"}}'
  '{"stock_code": {"S": "1009"}, "stock_name": {"S": "ヘルスケアソリューション"}, "category": {"S": "医療"}, "quantity": {"N": "230"}, "price": {"N": "2700"}}'
  '{"stock_code": {"S": "1010"}, "stock_name": {"S": "クリーンエナジー"}, "category": {"S": "環境"}, "quantity": {"N": "800"}, "price": {"N": "3100"}}'
  '{"stock_code": {"S": "1011"}, "stock_name": {"S": "アジアトレード"}, "category": {"S": "貿易"}, "quantity": {"N": "150"}, "price": {"N": "4800"}}'
  '{"stock_code": {"S": "1012"}, "stock_name": {"S": "グリーンテック"}, "category": {"S": "IT"}, "quantity": {"N": "900"}, "price": {"N": "2100"}}'
  '{"stock_code": {"S": "1013"}, "stock_name": {"S": "ビジネスサービス"}, "category": {"S": "サービス"}, "quantity": {"N": "330"}, "price": {"N": "1600"}}'
  '{"stock_code": {"S": "1014"}, "stock_name": {"S": "サンライズ製作所"}, "category": {"S": "製造"}, "quantity": {"N": "710"}, "price": {"N": "2800"}}'
  '{"stock_code": {"S": "1015"}, "stock_name": {"S": "ワールドエクスプレス"}, "category": {"S": "貿易"}, "quantity": {"N": "205"}, "price": {"N": "4200"}}'
  '{"stock_code": {"S": "1016"}, "stock_name": {"S": "ヘルスネット"}, "category": {"S": "医療"}, "quantity": {"N": "540"}, "price": {"N": "2300"}}'
  '{"stock_code": {"S": "1017"}, "stock_name": {"S": "フューチャーラボ"}, "category": {"S": "IT"}, "quantity": {"N": "860"}, "price": {"N": "3500"}}'
  '{"stock_code": {"S": "1018"}, "stock_name": {"S": "エコファーム"}, "category": {"S": "環境"}, "quantity": {"N": "410"}, "price": {"N": "1900"}}'
  '{"stock_code": {"S": "1019"}, "stock_name": {"S": "スマートデバイス"}, "category": {"S": "IT"}, "quantity": {"N": "670"}, "price": {"N": "3300"}}'
  '{"stock_code": {"S": "1020"}, "stock_name": {"S": "グッドライフ"}, "category": {"S": "サービス"}, "quantity": {"N": "290"}, "price": {"N": "1500"}}'
  '{"stock_code": {"S": "1021"}, "stock_name": {"S": "トータルサポート"}, "category": {"S": "サービス"}, "quantity": {"N": "510"}, "price": {"N": "1800"}}'
  '{"stock_code": {"S": "1022"}, "stock_name": {"S": "メディカルリンク"}, "category": {"S": "医療"}, "quantity": {"N": "370"}, "price": {"N": "2600"}}'
  '{"stock_code": {"S": "1023"}, "stock_name": {"S": "ジャパンフーズ"}, "category": {"S": "食品"}, "quantity": {"N": "800"}, "price": {"N": "1200"}}'
  '{"stock_code": {"S": "1024"}, "stock_name": {"S": "シティファイナンス"}, "category": {"S": "金融"}, "quantity": {"N": "430"}, "price": {"N": "4100"}}'
  '{"stock_code": {"S": "1025"}, "stock_name": {"S": "グローバルリンク"}, "category": {"S": "貿易"}, "quantity": {"N": "340"}, "price": {"N": "4700"}}'
  '{"stock_code": {"S": "1026"}, "stock_name": {"S": "クリエイトワークス"}, "category": {"S": "IT"}, "quantity": {"N": "720"}, "price": {"N": "3000"}}'
  '{"stock_code": {"S": "1027"}, "stock_name": {"S": "スマイルサービス"}, "category": {"S": "サービス"}, "quantity": {"N": "280"}, "price": {"N": "1400"}}'
  '{"stock_code": {"S": "1028"}, "stock_name": {"S": "ファイナンシャルブレイン"}, "category": {"S": "金融"}, "quantity": {"N": "610"}, "price": {"N": "3700"}}'
  '{"stock_code": {"S": "1029"}, "stock_name": {"S": "エコテック"}, "category": {"S": "環境"}, "quantity": {"N": "540"}, "price": {"N": "2000"}}'
  '{"stock_code": {"S": "1030"}, "stock_name": {"S": "アグリカルチャー"}, "category": {"S": "食品"}, "quantity": {"N": "360"}, "price": {"N": "1300"}}'
  '{"stock_code": {"S": "1111"}, "stock_name": {"S": "商品A"}, "category": {"S": "IT"}, "quantity": {"N": "10"}, "price": {"N": "2500"}}'
  '{"stock_code": {"S": "1234"}, "stock_name": {"S": "商品B"}, "category": {"S": "製造"}, "quantity": {"N": "20"}, "price": {"N": "1800"}}'
  '{"stock_code": {"S": "2222"}, "stock_name": {"S": "商品C"}, "category": {"S": "医療"}, "quantity": {"N": "15"}, "price": {"N": "3200"}}'
  '{"stock_code": {"S": "3333"}, "stock_name": {"S": "商品D"}, "category": {"S": "食品"}, "quantity": {"N": "8"}, "price": {"N": "1100"}}'
  '{"stock_code": {"S": "4444"}, "stock_name": {"S": "商品E"}, "category": {"S": "金融"}, "quantity": {"N": "30"}, "price": {"N": "4100"}}'
  '{"stock_code": {"S": "2323"}, "stock_name": {"S": "商品F"}, "category": {"S": "貿易"}, "quantity": {"N": "12"}, "price": {"N": "4700"}}'
)

for item in "${items[@]}"; do
  aws dynamodb put-item \
    --endpoint-url "${DYNAMODB_ENDPOINT}" \
    --table-name "${DYNAMODB_TABLE}" \
    --item "$item"
done

# データ検証
echo "🔍 データ確認..."
aws dynamodb scan \
  --endpoint-url "${DYNAMODB_ENDPOINT}" \
  --table-name "${DYNAMODB_TABLE}" \
  --query "Items[*]" \
  --output json

echo "✅ セットアップ完了"
