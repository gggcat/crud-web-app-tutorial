FROM node:18-bookworm

WORKDIR /app

COPY package*.json ./
COPY wrangler.toml ./
RUN npm install

# AWS CLIとPython依存関係のインストール
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3-pip \
    && pip3 install --no-cache-dir --break-system-packages awscli \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# デフォルト環境変数（docker-composeで上書き可能）
ENV DYNAMODB_ENDPOINT=http://dynamodb-local:8000 \
    DYNAMODB_TABLE=stocks \
    AWS_ACCESS_KEY_ID=dummy \
    AWS_SECRET_ACCESS_KEY=dummy \
    AWS_DEFAULT_REGION=local

# 開発モード起動（本番時はnpm startに変更）
CMD ["npx", "wrangler", "dev", "--local"]
