// frontend/src/StockManagerMUI.tsx
import React, { useState } from 'react'
import {
  Box, TextField, Button, Typography, Paper, Grid, Snackbar, Alert, ButtonGroup
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import SearchIcon from '@mui/icons-material/Search'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteIcon from '@mui/icons-material/Delete'

interface Stock {
 stock_code: string
 stock_name: string
 quantity: number
}

interface ApiResponse<T> {
  data?: T;
  error?: string;
  metadata?: {
    requestId: string;
    timestamp: string;
    durationMs?: number; // Optional duration
  };
}

// Viteプロキシを使用するため、ベースURLは不要。相対パス /api を使用する。
// const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export default function StockManagerMUI() { // Component name updated for clarity
  const [searchStockCode, setSearchStockCode] = useState(''); // Renamed for clarity
  const [stockData, setStockData] = useState<Stock | null>(null);
  const [editMode, setEditMode] = useState(false)
  const [editStock, setEditStock] = useState<Stock | null>(null)
  const [newStock, setNewStock] = useState<Stock>({
    stock_code: '',
    stock_name: '',
    quantity: 0
  })
  const [snackbar, setSnackbar] = useState<{open: boolean, message: string, severity: "success" | "error"}>({
    open: false, message: '', severity: "success"
  })

  // 在庫情報取得
  const fetchStock = async () => {
    if (!searchStockCode) {
      setSnackbar({ open: true, message: '検索する銘柄コードを入力してください', severity: "error" });
      return;
    }
    setStockData(null); // Clear previous data
    setEditStock(null);
    setEditMode(false);
    try {
      // 相対パス /api を使用
      const response = await fetch(`/api/stocks/${searchStockCode}`);
      const res: ApiResponse<Stock> = await response.json(); // Get full response

      if (!response.ok) {
        // Use error message from API if available
        throw new Error(res.error || `HTTP error! status: ${response.status}`);
      }

      if (res.data) {
        setStockData(res.data);
        setEditStock(res.data); // Set data for editing view
        setSnackbar({ open: true, message: '在庫情報を取得しました', severity: "success" });
      } else {
        // Handle case where API returns 2xx but no data (e.g., 404 handled by API)
        setSnackbar({ open: true, message: res.error || '在庫が見つかりません', severity: "error" });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      const message = error instanceof Error ? error.message : '在庫情報の取得に失敗しました';
      setSnackbar({ open: true, message, severity: "error" });
      setStockData(null);
      setEditStock(null);
    }
  };


  // 在庫情報登録
  const createStock = async () => {
    if (!newStock.stock_code) {
        setSnackbar({ open: true, message: '登録する銘柄コードを入力してください', severity: "error" });
        return;
    }
    try {
      // 相対パス /api を使用
      const response = await fetch(`/api/stocks/${newStock.stock_code}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStock) // Send the whole newStock object
      });

      const res: ApiResponse<{ success?: boolean }> = await response.json(); // Get full response

      if (!response.ok) {
        // Use error message from API if available
        throw new Error(res.error || `HTTP error! status: ${response.status}`);
      }

      setSnackbar({ open: true, message: '登録が成功しました', severity: "success" });
      setNewStock({ stock_code: '', stock_name: '', quantity: 0 }); // Clear form
      // Optionally fetch the newly created stock
      setSearchStockCode(newStock.stock_code);
      fetchStock();
    } catch (error) {
      console.error("Create error:", error);
      const message = error instanceof Error ? error.message : '登録に失敗しました';
      setSnackbar({ open: true, message, severity: "error" });
    }
  };

  // 在庫情報編集 (PUTメソッドを実装)
  const updateStock = async () => {
    if (!editStock) return;
    try {
      // 相対パス /api を使用
      const response = await fetch(`/api/stocks/${editStock.stock_code}`, {
        method: 'PUT', // Use PUT method
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editStock) // Send the edited stock data
      });

      const res: ApiResponse<{ success?: boolean }> = await response.json();

      if (!response.ok) {
        throw new Error(res.error || `HTTP error! status: ${response.status}`);
      }

      setSnackbar({ open: true, message: '更新が成功しました', severity: "success" });
      setStockData(editStock); // Update local state with edited data
      setEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Update error:", error);
      const message = error instanceof Error ? error.message : '更新に失敗しました';
      setSnackbar({ open: true, message, severity: "error" });
    }
  };

// 在庫情報削除
const deleteStock = async () => {
  if (!stockData) return;
  try {
    const response = await fetch(`/api/stocks/${stockData.stock_code}`, {
      method: 'DELETE'
    });
    const res: ApiResponse<{ success?: boolean }> = await response.json();

    if (!response.ok) {
      throw new Error(res.error || `HTTP error! status: ${response.status}`);
    }

    setSnackbar({ open: true, message: '削除が成功しました', severity: "success" });
    setStockData(null);
    setEditStock(null);
    setEditMode(false);
    setSearchStockCode('');
  } catch (error) {
    console.error("Delete error:", error);
    const message = error instanceof Error ? error.message : '削除に失敗しました';
    setSnackbar({ open: true, message, severity: "error" });
  }
};



  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          在庫管理システム
        </Typography>

        {/* 検索 */}
        {/* 検索 */}
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <TextField
            label="銘柄コードを入力"
            variant="outlined"
            size="small"
            value={searchStockCode} // Use renamed state
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchStockCode(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={fetchStock}
          >
            検索
          </Button>
        </Box>

        {/* 在庫情報表示・編集 */}
        {stockData && (
          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              在庫情報
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  label="商品コード"
                  value={editStock?.stock_code || ''}
                  InputProps={{ readOnly: true }}
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="商品名"
                  value={editStock?.stock_name || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditStock(editStock ? { ...editStock, stock_name: e.target.value } : null)}
                  fullWidth
                  variant={editMode ? "outlined" : "filled"}
                  InputProps={{ readOnly: !editMode }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  label="数量"
                  type="number"
                  value={editStock?.quantity || 0}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditStock(editStock ? { ...editStock, quantity: Number(e.target.value) } : null)}
                  fullWidth
                  variant={editMode ? "outlined" : "filled"}
                  InputProps={{ readOnly: !editMode }}
                />
              </Grid>
              {/* 編集・保存ボタン */}
              <Grid item xs={12} sm={2}>
                <ButtonGroup variant="outlined" size="small">
                  {editMode ? (
                    <Button
                      color="success"
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={updateStock}
                    >
                      保存
                    </Button>
                  ) : (
                    <Button
                      color="secondary"
                      startIcon={<EditIcon />}
                      onClick={() => setEditMode(true)}
                      disabled={!stockData}
                    >
                      編集
                    </Button>
                  )}
                  <Button
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={deleteStock}
                    disabled={!stockData}
                  >
                    削除
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* 新規登録 */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            新規登録
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="銘柄コード"
                value={newStock.stock_code}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStock({ ...newStock, stock_code: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="銘柄名"
                value={newStock.stock_name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStock({ ...newStock, stock_name: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="数量"
                type="number"
                value={newStock.quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStock({ ...newStock, quantity: Number(e.target.value) })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}> {/* Adjusted grid size */}
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
                onClick={createStock}
                disabled={!newStock.stock_code} // Disable if stock code is empty
                fullWidth // Make button full width in its grid item
              >
                登録
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({...snackbar, open: false})}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  )
}
