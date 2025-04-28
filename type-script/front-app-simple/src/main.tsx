import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function TabSwitcher() {
  const [tab, setTab] = useState('app');

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setTab('app')}>シンプル個別入力</button>
      </div>
      {tab === 'app' && <App />}
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
