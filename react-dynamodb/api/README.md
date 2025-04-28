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
docker-compose exec api bash ./scripts/create-table.sh
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
