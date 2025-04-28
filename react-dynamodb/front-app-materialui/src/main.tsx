import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AppMUI from './AppMUI';
import AppListMUI from './AppListMUI';
import './App.css'

function TabSwitcher() {
  const [tab, setTab] = useState('mui');

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setTab('mui')}>個別入力</button>
        <button onClick={() => setTab('list-mui')}>一覧入力</button>
      </div>
      {tab === 'mui' && <AppMUI />}
      {tab === 'list-mui' && <AppListMUI />}
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TabSwitcher />
    </React.StrictMode>
  );
} else {
  throw new Error('Root element with id "root" not found.');
}
