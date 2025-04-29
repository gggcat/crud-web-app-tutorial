#!/bin/sh
set -e

# すべての環境変数を .dev.vars に書き出す
printenv | grep -v '^PWD=' | grep -v '^HOME=' | grep -v '^SHLVL=' | grep -v '^_' > /app/.dev.vars

echo ".dev.varsを生成しました:"
cat /app/.dev.vars

# wrangler dev（ローカル開発モード）を起動
exec npx wrangler dev --local