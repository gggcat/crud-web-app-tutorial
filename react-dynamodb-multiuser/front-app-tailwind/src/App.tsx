import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Home from './pages/Home';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('list-tailwind');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ログインボタン押下時の処理（リダイレクト方式）
  const handleGoogleLogin = () => {
    // 必要に応じてstateやcallback_urlを付与
    window.location.href = '/api/auth/google';
  };

  // ログアウト
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  // トークンがあればユーザー情報取得
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/users', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.ok ? res.json() : null)
        .then(api_result => api_result && setUser(api_result.data))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar selectedMenu={selectedMenu} onSelect={setSelectedMenu} />
      <div className="flex-1 flex flex-col">
      <Header
          user={user}
          onLogin={handleGoogleLogin}
          onLogout={handleLogout}
        />
        <MainContent selectedMenu={selectedMenu} />
      </div>
    </div>
    );
}

export default App;
