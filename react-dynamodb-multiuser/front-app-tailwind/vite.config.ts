import { defineConfig, loadEnv } from 'vite'
import type { ProxyOptions } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

/**
 * Vite開発サーバー設定（強化版）
 * - 環境変数の厳格なバリデーション
 * - マルチ環境対応
 * - 型安全なプロキシ設定
 */
export default defineConfig(({ mode }) => {
  // VITE_ で始まる環境変数をロード
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  // 環境変数のバリデーション
  const requiredVars = ['VITE_API_URL', 'VITE_APP_ENV']
  requiredVars.forEach(varName => {
    if (!env[varName]) throw new Error(`${varName} is required`)
  })

  // プロキシ設定
  const proxyConfig: Record<string, ProxyOptions> = {
    '/api': {
      target: env.VITE_API_URL,
      changeOrigin: true,
      rewrite: (p) => p.replace(/^\/api/, ''),
      secure: env.VITE_APP_ENV === 'production',
      ws: true,
      configure: (proxy) => {
        proxy.on('error', (err) => {
          console.error('Proxy Error:', err)
        })
      }
    }
  }

  return {
    //plugins: [react()],
    server: {
      proxy: proxyConfig,
      // appType: 'spa' は Vite 4 以降は server 配下ではなくトップレベル
    },
    appType: 'spa', // ここで SPA モードを明示（Vite 4以降）
    // historyApiFallbackはappType: 'spa'で自動有効なので不要
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  }
})
