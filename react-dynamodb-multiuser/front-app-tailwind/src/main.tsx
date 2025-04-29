import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AppListMTailwind from './AppListTailwind';
import './tailwind.css';
import { useState } from 'react';

function Sidebar({ selectedMenu, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { key: 'list-tailwind', label: '銘柄一覧' },
    { key: 'search-performance', label: '検索パフォーマンス' },
    { key: 'url-inspect', label: 'URL検査' },
    { key: 'indexing', label: 'インデックス作成' },
    { key: 'experience', label: 'エクスペリエンス' },
    { key: 'links', label: 'リンク' },
    { key: 'settings', label: '設定' },
  ];

  return (
    <>
      {/* モバイル用ハンバーガーメニューボタン */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* サイドバー */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40
        w-60 bg-white h-screen border-r flex flex-col py-4
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="px-6 py-2 text-xl font-bold">Tailwind CSSサンプル</div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            {menus.map(menu => (
              <li key={menu.key}>
                <button
                  className={`w-full text-left flex items-center px-6 py-2 rounded-r-full font-semibold transition ${
                    selectedMenu === menu.key
                      ? 'bg-blue-100 text-blue-600'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    onSelect(menu.key);
                    setIsOpen(false); // モバイル時にメニュー選択後閉じる
                  }}
                >
                  {menu.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* モバイル用オーバーレイ背景 */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 border-b">
      <input
        type="text"
        className="w-1/2 border rounded px-3 py-2 bg-gray-50"
        placeholder="https://www.nullpo.io/ 内のすべてのURLを検査"
      />
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <span className="material-icons">help_outline</span>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <span className="material-icons">notifications</span>
        </button>
        <button className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700">
          G
        </button>
      </div>
    </header>
  );
}

function MainContent({ selectedMenu }) {
  return (
    <main className="p-8 space-y-6">
      {selectedMenu === 'list-tailwind' && (
        <div className="bg-white rounded-lg shadow p-6">
          <AppListMTailwind />
        </div>
      )}
      {selectedMenu !== 'list-tailwind' && (
        <div className="bg-white rounded-lg shadow p-6 text-gray-400 text-center">
          {selectedMenu === 'search-performance' && '検索パフォーマンスの画面（実装例）'}
          {selectedMenu === 'url-inspect' && 'URL検査の画面（実装例）'}
          {selectedMenu === 'indexing' && 'インデックス作成の画面（実装例）'}
          {selectedMenu === 'experience' && 'エクスペリエンスの画面（実装例）'}
          {selectedMenu === 'links' && 'リンクの画面（実装例）'}
          {selectedMenu === 'settings' && '設定の画面（実装例）'}
        </div>
      )}
    </main>
  );
}

function App() {
  const [selectedMenu, setSelectedMenu] = useState('list-tailwind');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar selectedMenu={selectedMenu} onSelect={setSelectedMenu} />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent selectedMenu={selectedMenu} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found.');
}
