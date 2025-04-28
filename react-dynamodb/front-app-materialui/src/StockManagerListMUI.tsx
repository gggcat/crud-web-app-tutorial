// frontend/src/StockManagerListMUI.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridRowId,
  GridRowModel,
  GridSortModel,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { Snackbar, Alert, LinearProgress } from '@mui/material';

//削除ボタン
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//編集
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


//追加フォーム
import { TextField, Button, Stack } from '@mui/material';


//
// テーブル
//
interface Stock {
  stock_code: string;
  stock_name: string;
  quantity: number;
  category?: string;
  price?: number;
}

const StocksTable = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10, total: 0 });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);





  //
  // 追加フォーム
  //
  const [newStock, setNewStock] = useState({
    stock_code: '',
    stock_name: '',
    quantity: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStock((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddStock = async () => {
    if (!newStock.stock_code || !newStock.stock_name || !newStock.quantity) {
      setError('全ての項目を入力してください');
      return;
    }
    setLoading(true);
    try {
      // 数値変換
      const payload = {
        ...newStock,
        quantity: Number(newStock.quantity),
      };
      await axios.post(`/api/stocks/${newStock.stock_code}`, payload);
      setNewStock({ stock_code: '', stock_name: '', quantity: '' });
      // 最新データ取得
      fetchStocks({
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
    } catch (err) {
      setError('追加に失敗しました');
    } finally {
      setLoading(false);
    }
  };




  const fetchStocks = async (params: {
    page: number;
    pageSize: number;
    sort?: string;
  }) => {
    setLoading(true);
    try {
      const response = await axios.get('/api/stocks', {
        params: {
          limit: params.pageSize,
          offset: params.page * params.pageSize,
          sort: sortModel.map(s => `${s.field}${s.sort === 'desc' ? ',-' : ''}`).join(','),
        },
      });

      setStocks(response.data.data);
      setPagination(prev => ({
        ...prev,
        total: response.data.pagination.total,
      }));
    } catch (err) {
      setError('データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleSortModelChange = (newModel: GridSortModel) => {
    setSortModel(newModel);
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPagination(prev => ({
      ...prev,
      page: model.page,
      pageSize: model.pageSize,
    }));
  };

  const handleUpdateStock = async (updatedRow: GridRowModel): Promise<Stock> => {
    try {
      await axios.put(`/api/stocks/${updatedRow.stock_code}`, updatedRow);
      return updatedRow;
    } catch (err) {
      setError('更新に失敗しました');
      throw err;
    }
  };

  const handleDeleteStock = async (stock_code: string) => {
    setLoading(true);
    try {
      await axios.delete(`/api/stocks/${stock_code}`);
      setStocks((prev) => prev.filter((row) => row.stock_code !== stock_code));
      setPagination((prev) => ({
        ...prev,
        total: prev.total - 1,
      }));
    } catch (err) {
      setError('削除に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    {
      field: 'stock_code',
      headerName: '商品コード',
      width: 150,
      editable: false,
    },
    {
      field: 'stock_name',
      headerName: '商品名',
      width: 200,
      editable: true,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <span style={{ flex: 1 }}>{params.value}</span>
          <EditIcon fontSize="small" color="action" style={{ marginLeft: 4 }} />
        </div>
      ),
    },
    {
      field: 'quantity',
      headerName: '在庫数量',
      type: 'number',
      width: 150,
      editable: true,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <span style={{ flex: 1 }}>{params.value}</span>
          <EditIcon fontSize="small" color="action" style={{ marginLeft: 4 }} />
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: '操作',
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton
          color="error"
          size="small"
          onClick={() => handleDeleteStock(params.row.stock_code)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  useEffect(() => {
    fetchStocks({
      page: pagination.page,
      pageSize: pagination.pageSize,
    });
  }, [sortModel, pagination.page, pagination.pageSize]);

  return (
    <div style={{ height: 700, width: '100%' }}>

      {/* 追加フォーム */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <TextField
          label="商品コード"
          name="stock_code"
          size="small"
          value={newStock.stock_code}
          onChange={handleInputChange}
        />
        <TextField
          label="商品名"
          name="stock_name"
          size="small"
          value={newStock.stock_name}
          onChange={handleInputChange}
        />
        <TextField
          label="在庫数量"
          name="quantity"
          size="small"
          type="number"
          value={newStock.quantity}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          onClick={handleAddStock}
          disabled={loading}
        >
          追加
        </Button>
      </Stack>



      <DataGrid
        rows={stocks}
        columns={columns}
        getRowId={(row) => row.stock_code}
        loading={loading}
        rowCount={pagination.total}
        pageSizeOptions={[10, 20, 50]}
        paginationMode="server"
        sortingMode="server"
        paginationModel={{
          page: pagination.page,
          pageSize: pagination.pageSize,
        }}
        onPaginationModelChange={handlePaginationModelChange}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        processRowUpdate={handleUpdateStock}
        slots={{
          toolbar: GridToolbar,
          loadingOverlay: LinearProgress,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        experimentalFeatures={{
          newEditingApi: true,
        }}
      />

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default StocksTable;
