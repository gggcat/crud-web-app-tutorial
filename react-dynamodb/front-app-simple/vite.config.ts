import { defineConfig, loadEnv } from 'vite'

/**
 * Vite開発サーバー設定
 * - .envファイルからVITE_API_URLを読み込み
 * - /api へのリクエストをバックエンドAPIへプロキシ
 */
export default defineConfig(({ mode }) => {
  // .envファイルから環境変数を読み込む
  const env = loadEnv(mode, process.cwd(), '')

  // APIエンドポイントのバリデーション
  if (!env.VITE_API_URL) {
    throw new Error('VITE_API_URL is not defined in environment variables')
  }

  return {
    server: {
      host: true,
      proxy: {
        // /api で始まるリクエストをVITE_API_URLへ
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
          secure: false, // HTTPS自己証明書の場合はfalse
          // ws: true, // WebSocketが必要な場合はコメント解除
        }
      }
    }
  }
})
