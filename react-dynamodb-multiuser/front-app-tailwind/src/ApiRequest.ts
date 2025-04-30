import axios from "axios";

// Axiosインスタンス作成
const ApiRequest = axios.create({
  baseURL: "/", // 必要に応じて変更
  timeout: 10000,
});

// リクエストインターセプターで毎回localStorageからtokenを取得し、ヘッダーに付与
ApiRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default ApiRequest;
