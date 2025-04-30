import React, { useState, useRef, useEffect } from 'react';

const UserProfileDropdown = ({ user, onLogin, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ドロップダウン外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // イニシャル取得
  const getInitial = (name) => {
    if (!name) return '';
    return name.trim().charAt(0).toUpperCase();
  };

  // アイコン背景
  const avatarBg = "bg-gray-100"; // 薄いグレー背景

  if (!user) {
    return (
      <button
        onClick={onLogin}
        className={`w-10 h-10 rounded-full flex items-center justify-center ring-1 ring-gray-300 ${avatarBg}`}
        title="ログイン"
      >
        {/* グレーのユーザーアイコン */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="#757575"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 16-4 16 0" />
        </svg>
      </button>
    );
  }

  // --- ログイン済み時の表示 ---
  return (
    <div className="relative" ref={dropdownRef}>
      {/* 右上のアイコン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg ${avatarBg}`}
        title={user.name}
      >
        {user.picture ? (
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          getInitial(user.name)
        )}
      </button>

      {/* ドロップダウンカード */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-gray-200 z-20">
          {/* ヘッダー */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">{user.email}</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">Googleアカウントにログインしています</p>
          </div>

          {/* プロフィール部分 */}
          <div className="p-6 flex flex-col items-center">
            <div className="relative">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl font-bold ${avatarBg}`}>
                {user.picture ? (
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  getInitial(user.name)
                )}
              </div>
            </div>
            <h3 className="mt-4 text-lg font-medium">{user.name}</h3>
            {/* Googleアカウントを管理 */}
            <a
              href="https://myaccount.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2 border border-gray-300 rounded-full text-blue-600 font-medium hover:bg-gray-50 transition text-center"
            >
              Google アカウントを管理
            </a>
            {/* 再ログイン、ログアウト */}
            <div className="mt-6 w-full grid grid-cols-2 gap-4">
              <button
                onClick={onLogin}
                className="py-3 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                <span>再ログイン</span>
              </button>
              <button
                onClick={onLogout}
                className="py-3 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                </svg>
                <span>ログアウト</span>
              </button>
            </div>
            <div className="mt-6 w-full text-center text-sm text-gray-500">
              <a href="#" className="hover:underline">プライバシー ポリシー</a>
              <span className="mx-2">・</span>
              <a href="#" className="hover:underline">利用規約</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
