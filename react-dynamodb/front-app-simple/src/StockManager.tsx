// frontend/src/StockManager.tsx
import React, { useState } from 'react';

interface Stock {
  stock_code: string;
  stock_name: string;
  quantity: number;
}

// Viteプロキシを使用するため、ベースURLは不要。相対パス /api を使用する。
// const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export default function StockManager() {
  const [searchStockCode, setSearchStockCode] = useState(''); // 検索用銘柄コード
  const [stockData, setStockData] = useState<Stock | null>(null);
  const [newStock, setNewStock] = useState<Stock>({ // 新規登録用データ（Stock型全体）
    stock_code: '',
    stock_name: '',
    quantity: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 在庫情報取得
  const fetchStock = async () => {
    if (!searchStockCode) {
      setError('検索する銘柄コードを入力してください。');
      return;
    }
    setLoading(true);
    setError(null);
    setStockData(null); // 前回の結果をクリア
    try {
      // 相対パス /api を使用
      const response = await fetch(`/api/stocks/${searchStockCode}`);
      const result = await response.json(); // レスポンス全体を取得

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }
      // APIは { data: Stock, metadata: ... } の形式で返す
      if (result.data) {
        setStockData(result.data);
      } else {
        // データがない場合（404など）もエラーとして扱うか、表示を分ける
        setError(result.error || '在庫が見つかりません。');
        setStockData(null);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err instanceof Error ? err.message : '在庫情報の取得に失敗しました。');
      setStockData(null);
    } finally {
      setLoading(false);
    }
  };

  // 在庫情報登録
  const createStock = async () => {
    if (!newStock.stock_code) {
        setError('登録する銘柄コードを入力してください。');
        return;
    }
    setLoading(true);
    setError(null);
    try {
      // 相対パス /api を使用
      const response = await fetch(`/api/stocks/${newStock.stock_code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // ボディにはStockオブジェクト全体を送信
        body: JSON.stringify(newStock),
      });

      const result = await response.json(); // レスポンス全体を取得

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      alert('登録が成功しました');
      // 登録成功したら、登録した銘柄コードで再検索
      setSearchStockCode(newStock.stock_code);
      fetchStock();
      // フォームをクリア
      setNewStock({ stock_code: '', stock_name: '', quantity: 0 });
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : '在庫情報の登録に失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>在庫管理システム (シンプル版)</h1>

      {/* エラーメッセージ表示 */}
      {error && <p style={{ color: 'red' }}>エラー: {error}</p>}

      {/* 検索セクション */}
      <div>
        <h2>在庫検索</h2>
        <input
          type="text"
          placeholder="銘柄コードを入力"
          value={searchStockCode}
          onChange={(e) => setSearchStockCode(e.target.value)}
          disabled={loading}
        />
        <button onClick={fetchStock} disabled={loading || !searchStockCode}>
          {loading ? '検索中...' : '検索'}
        </button>
      </div>

      {/* 在庫情報表示セクション */}
      {loading && <p>読み込み中...</p>}
      {stockData && !loading && (
        <div>
          <h2>在庫情報</h2>
          <p>銘柄コード: {stockData.stock_code}</p>
          <p>銘柄名: {stockData.stock_name}</p>
          <p>数量: {stockData.quantity}</p>
        </div>
      )}
      {!stockData && !loading && !error && <p>銘柄コードを入力して検索してください。</p>}


      {/* 新規登録セクション */}
      <div>
        <h2>新規登録 / 更新</h2>
        <input
          type="text"
          placeholder="銘柄コード"
          value={newStock.stock_code}
          onChange={(e) => setNewStock({ ...newStock, stock_code: e.target.value })}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="銘柄名"
          value={newStock.stock_name}
          onChange={(e) => setNewStock({ ...newStock, stock_name: e.target.value })}
          disabled={loading}
        />
        <input
          type="number"
          placeholder="数量"
          value={newStock.quantity}
          // 念のため数値変換とNaNチェック
          onChange={(e) => setNewStock({ ...newStock, quantity: parseInt(e.target.value, 10) || 0 })}
          disabled={loading}
        />
        <button onClick={createStock} disabled={loading || !newStock.stock_code}>
          {loading ? '登録中...' : '登録'}
        </button>
      </div>
    </div>
  );
}
