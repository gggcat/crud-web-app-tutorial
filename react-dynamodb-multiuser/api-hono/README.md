# APIサンプル

## ベストプラクティス

- リソース指向設計と標準的なHTTPメソッドの活用
- 一貫性あるURIとフィールド命名
- ステートレス設計（リクエストごとに必要情報を完結させる）
- バリデーション・認証・エラーハンドリングの統一
- APIバージョニング（必要に応じて /v1/stocks など）
- ユーザー体験重視の「1画面1API」も検討（SSKD向け、必要なデータをまとめて返す）

## テーブル作成

テーブル作成スクリプトを実行

```bash
docker-compose exec api-hono bash ./scripts/create-table.sh
```

動作確認

```bash
curl.exe "http://localhost:8787/stocks?limit=1000"
curl.exe "http://localhost:8787/stocks/1234"
```

## データ構造

操作	メソッド	パス	説明
一覧取得	GET	/stocks	在庫リストを取得（ページング・検索対応）
詳細取得	GET	/stocks/{stock_code}	個別在庫情報を取得
新規作成	POST	/stocks	在庫を新規登録
更新	PUT/PATCH	/stocks/{stock_code}	在庫情報を更新
削除	DELETE	/stocks/{stock_code}	在庫情報を削除

一覧取得でページネーションや検索・ソートをクエリパラメータでサポート（例: GET /stocks?limit=20&offset=40&sort=stock_code）

### ページネーション・フィルタ・ソート

ページネーション：limitとoffsetまたはpageパラメータ
フィルタ：?name=xxxや?category=yyyなど
ソート：?sort=stock_code,-quantityのような形式

## 一覧取得

```json
{
  "data": [
    { "stock_code": "1111", "stock_name": "商品A", "quantity": 10 },
    { "stock_code": "2222", "stock_name": "商品B", "quantity": 5 }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 100
  },
  "metadata": {
    "requestId": "xxxx",
    "timestamp": "2025-04-22T12:00:00Z"
  }
}
```

## 個別取得・更新時

```json
{
  "data": { "stock_code": "1111", "stock_name": "商品A", "quantity": 10 },
  "metadata": { ... }
}
```

## エラー時

```json
{
  "error": "Not found",
  "metadata": { ... }
}
```

## 実行例

### 一覧取得（ページネーション・検索対応）

```bash
GET /stocks?limit=20&offset=0&stock_name=鉛筆
```

### 新規作成

```bash
POST /stocks
Body: { "stock_code": "3333", "stock_name": "消しゴム", "quantity": 50 }
```

### 個別取得

```bash
GET /stocks/3333
```

### 更新

```bash
PUT /stocks/3333
Body: { "stock_code": "3333", "stock_name": "消しゴム", "quantity": 60 }
```

### 削除

```bash
DELETE /stocks/3333
```

### 一括編集（必要な場合のみ）

```bash
PUT /stocks
Body: [
  { "stock_code": "1111", "quantity": 20 },
  { "stock_code": "2222", "quantity": 30 }
]
```


## フォルダ構成

```bash
/src
  app.ts                # Honoアプリのエントリーポイント
  /routes
    stocks.ts           # /stocks系APIルート
    auth.ts             # Google認証関連ルート
  /middlewares
    auth.ts             # JWT認証ミドルウェア
    cors.ts             # CORSミドルウェア
  /services
    dynamodb.ts         # DynamoDBクライアント初期化・操作
    user.ts             # ユーザー管理ロジック
    jwt.ts              # JWT発行・検証ロジック
  /types
    env.d.ts            # 環境変数型定義
    api-response.d.ts   # APIレスポンス型定義
    stock.d.ts          # Stock型定義
    user.d.ts           # User型定義
  /utils
    response.ts         # レスポンスフォーマット関数
.env                    # 環境変数
package.json
tsconfig.json
```


## GOOGLE_CLIENT_ID

Google Cloud Consoleにログイン

プロジェクトを作成または選択

「APIとサービス」→「認証情報」→「認証情報を作成」→「OAuthクライアントID」

アプリケーションの種類は「ウェブアプリケーション」を選択

「承認済みのリダイレクトURI」に、あなたのアプリのGoogle認証コールバックURL（例: http://localhost:3000/auth/google/callback）を設定

作成後に表示されるクライアントIDとクライアントシークレットを控える

これらを.envなどの環境変数として

text
GOOGLE_CLIENT_ID=取得したクライアントID
GOOGLE_CLIENT_SECRET=取得したクライアントシークレット

## 動作確認

```json
# curl.exe -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTUzMjE0MzEzMTc2OTYyMTQ0MjgiLCJyb2xlIjoidXNlciJ9.CTgUQH7kfoEJmxBzSwG7b-8daB6Xtx8omEqAOSeXxlY" http://localhost:8788/stocks
{"data":[{"quantity":200,"stock_name":"McDonald's Holdings Japan","category":"Food","purchase_date":"2024-04-01","user_id":"115321431317696214428","stock_code":"2702"},{"quantity":80,"stock_name":"Rakuten Group","category":"IT","purchase_date":"2024-04-25","user_id":"115321431317696214428","stock_code":"4755"},{"quantity":30,"stock_name":"Keyence","category":"Electronics","purchase_date":"2024-03-10","user_id":"115321431317696214428","stock_code":"6861"},{"quantity":100,"stock_name":"Toyota Motor Corporation","category":"Automotive","purchase_date":"2024-01-15","user_id":"115321431317696214428","stock_code":"7203"},{"quantity":50,"stock_name":"SoftBank Group","category":"IT","purchase_date":"2024-02-20","user_id":"115321431317696214428","stock_code":"9984"}],"metadata":{"requestId":"0383f010-24da-4c65-85ad-4f77c6b017d3","timestamp":"2025-04-28T22:50:03.158Z"}}
# curl.exe -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTUzMjE0MzEzMTc2OTYyMTQ0MjgiLCJyb2xlIjoidXNlciJ9.CTgUQH7kfoEJmxBzSwG7b-8daB6Xtx8omEqAOSeXxlY" http://localhost:8788/stocks/4755
{"data":{"quantity":80,"stock_name":"Rakuten Group","category":"IT","purchase_date":"2024-04-25","user_id":"115321431317696214428","stock_code":"4755"},"metadata":{"requestId":"a1b25172-3b7b-4233-a677-06a7c422b402","timestamp":"2025-04-28T22:50:35.040Z"}}
```

