import AppListMTailwind from '../AppListTailwind';

export default function MainContent({ selectedMenu }) {
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
