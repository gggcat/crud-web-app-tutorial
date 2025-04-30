// src/types/user.d.ts
export type User = {
  user_id: string;
  email: string;
  name: string;
  picture: string | null; // プロフィール画像URL
  providers: string[];
  created_at: string;
  updated_at: string;
}