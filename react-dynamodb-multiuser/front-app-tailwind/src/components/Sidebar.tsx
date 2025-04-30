import React, { useState } from 'react';

export default function Sidebar({ selectedMenu, onSelect }) {
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
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
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
                    setIsOpen(false);
                  }}
                >
                  {menu.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
