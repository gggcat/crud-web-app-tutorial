import { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon,PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"; // Heroicons推奨
import ApiRequest from "./ApiRequest";

interface Stock {
  stock_code: string;
  stock_name: string;
  quantity: number;
}

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const StocksTable = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10, total: 0 });
  const [sort, setSort] = useState<{ field: string; desc: boolean } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<{ stock_name: string; quantity: string }>({ stock_name: "", quantity: "" });
  const [newStock, setNewStock] = useState({ stock_code: "", stock_name: "", quantity: "" });

  // データ取得
  const fetchStocks = async (page = pagination.page, pageSize = pagination.pageSize) => {
    setLoading(true);
    try {
      const params: any = {
        limit: pageSize,
        page: page + 1,
      };
      if (sort) params.sort = `${sort.desc ? "-" : ""}${sort.field}`;
      const res = await ApiRequest.get("/api/stocks", { params });
      setStocks(res.data.data);
      setPagination((prev) => ({
        ...prev,
        total: res.data.pagination.total,
        page,
        pageSize,
      }));
    } catch {
      setError("データの取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
    // eslint-disable-next-line
  }, [pagination.page, pagination.pageSize, sort]);

  // 追加
  const handleAddStock = async () => {
    if (!newStock.stock_code || !newStock.stock_name || !newStock.quantity) {
      setError("全ての項目を入力してください");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        stock_code: newStock.stock_code,
        stock_name: newStock.stock_name,
        quantity: Number(newStock.quantity),
      };
      await ApiRequest.post(`/api/stocks/${newStock.stock_code}`, payload);
      setNewStock({ stock_code: "", stock_name: "", quantity: "" });
      fetchStocks();
    } catch {
      setError("追加に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  // 編集
  const startEdit = (row: Stock) => {
    setEditingId(row.stock_code);
    setEditValue({ stock_name: row.stock_name, quantity: String(row.quantity) });
  };
  const handleEditSave = async (stock_code: string) => {
    setLoading(true);
    try {
      await ApiRequest.put(`/api/stocks/${stock_code}`, {
        stock_code,
        stock_name: editValue.stock_name,
        quantity: Number(editValue.quantity),
      });
      setEditingId(null);
      fetchStocks();
    } catch {
      setError("更新に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  // 削除
  const handleDeleteStock = async (stock_code: string) => {
    setLoading(true);
    try {
      await ApiRequest.delete(`/api/stocks/${stock_code}`);
      fetchStocks();
    } catch {
      setError("削除に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  // ページネーション
  const totalPages = Math.ceil(pagination.total / pagination.pageSize);

  return (
<div className="w-full min-h-screen bg-gray-50 p-2 md:p-8 lg:p-16">
  <div className="w-full max-w-screen-2xl mx-auto">
    {/* 追加フォーム */}
    <div className="grid grid-cols-[1fr_2fr_1fr_auto] gap-2 mb-4">
      <input
        className="border rounded px-2 py-1"
        placeholder="商品コード"
        name="stock_code"
        value={newStock.stock_code}
        onChange={e => setNewStock({ ...newStock, stock_code: e.target.value })}
      />
      <input
        className="border rounded px-2 py-1"
        placeholder="商品名"
        name="stock_name"
        value={newStock.stock_name}
        onChange={e => setNewStock({ ...newStock, stock_name: e.target.value })}
      />
      <input
        className="border rounded px-2 py-1"
        placeholder="在庫数量"
        name="quantity"
        type="number"
        value={newStock.quantity}
        onChange={e => setNewStock({ ...newStock, quantity: e.target.value })}
      />
      <button
        className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700 transition disabled:opacity-50 min-w-[90px] w-fit"
        onClick={handleAddStock}
        disabled={loading}
      >
        追加
      </button>
    </div>

    {/* エラー表示 */}
    {error && (
      <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2">{error}</div>
    )}

    {/* テーブル */}
    <div className="overflow-x-auto bg-white rounded shadow w-full">
      <table className="min-w-full table-fixed border-collapse">
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "auto", minWidth: "90px" }} />
        </colgroup>
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th className="p-2 text-left font-medium">商品コード</th>
            <th className="p-2 text-left font-medium">商品名</th>
            <th className="p-2 text-left font-medium">在庫数量</th>
            <th className="p-2 text-center font-medium">操作</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(row => (
            <tr
              key={row.stock_code}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-2 align-middle">{row.stock_code}</td>
              <td className="p-2 align-middle" onDoubleClick={() => startEdit(row)}>
                {editingId === row.stock_code ? (
                  <input
                    className="border rounded px-2 py-1 w-full"
                    value={editValue.stock_name}
                    onChange={e => setEditValue(ev => ({ ...ev, stock_name: e.target.value }))}
                    autoFocus
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        handleEditSave(row.stock_code);
                      }
                    }}
                  />
                ) : (
                  <div className="flex items-center">
                    <span className="flex-1">{row.stock_name}</span>
                    <button
                      className="ml-2 p-1 hover:bg-gray-200 rounded"
                      onClick={() => startEdit(row)}
                      title="編集"
                    >
                      <PencilSquareIcon className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                )}
              </td>
              <td className="p-2 align-middle" onDoubleClick={() => startEdit(row)}>
                {editingId === row.stock_code ? (
                  <input
                    className="border rounded px-2 py-1 w-full"
                    type="number"
                    value={editValue.quantity}
                    onChange={e => setEditValue(ev => ({ ...ev, quantity: e.target.value }))}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        handleEditSave(row.stock_code);
                      }
                    }}
                  />
                ) : (
                  <div className="flex items-center">
                    <span className="flex-1">{row.quantity}</span>
                    <button
                      className="ml-2 p-1 hover:bg-gray-200 rounded"
                      onClick={() => startEdit(row)}
                      title="編集"
                    >
                      <PencilSquareIcon className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                )}
              </td>
              <td className="p-2 align-middle text-center" style={{ minWidth: 90 }}>
                {editingId === row.stock_code ? (
                  <div className="flex gap-1 justify-center">
                    <button
                      className="p-1 rounded hover:bg-green-100"
                      onClick={() => handleEditSave(row.stock_code)}
                      disabled={loading}
                      title="保存"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-green-600" />
                    </button>
                    <button
                      className="p-1 rounded hover:bg-gray-200"
                      onClick={() => setEditingId(null)}
                      disabled={loading}
                      title="キャンセル"
                    >
                      <XCircleIcon className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                ) : (
                  <button
                    className="p-1 hover:bg-red-100 rounded"
                    onClick={() => handleDeleteStock(row.stock_code)}
                    title="削除"
                  >
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                )}
              </td>
            </tr>
          ))}
          {stocks.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-400">
                データがありません
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        </div>
      )}
    </div>

    {/* ページネーション */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-2">
      <div>
        <select
          className="border rounded px-2 py-1"
          value={pagination.pageSize}
          onChange={e => setPagination(prev => ({ ...prev, pageSize: Number(e.target.value), page: 0 }))}
        >
          {PAGE_SIZE_OPTIONS.map(size => (
            <option key={size} value={size}>
              {size}件/ページ
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setPagination(prev => ({ ...prev, page: Math.max(0, prev.page - 1) }))}
          disabled={pagination.page === 0}
        >
          前へ
        </button>
        <span>
          {pagination.page + 1} / {totalPages || 1}
        </span>
        <button
          className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setPagination(prev => ({ ...prev, page: Math.min(totalPages - 1, prev.page + 1) }))}
          disabled={pagination.page + 1 >= totalPages}
        >
          次へ
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default StocksTable;
