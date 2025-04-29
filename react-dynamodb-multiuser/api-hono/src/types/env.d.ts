// src/types/env.d.ts
export type Env = {
  Bindings: {
    JWT_SECRET: string
    USERS_TABLE: string
    STOCKS_TABLE: string
    DYNAMODB_ENDPOINT: string
    AWS_REGION: string
    AWS_ACCESS_KEY_ID: string
    AWS_SECRET_ACCESS_KEY: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    GOOGLE_REDIRECT_URI: string
  }
}
