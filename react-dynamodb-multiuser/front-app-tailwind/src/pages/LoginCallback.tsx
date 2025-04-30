// LoginCallback.jsx の修正版
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function LoginCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const jwt = searchParams.get('jwt');

    if (jwt) {
      localStorage.setItem('token', jwt);
      navigate('/', { replace: true }); // 正しいナビゲーション先
    } else {
      navigate('/login', { replace: true }); // エラー時のリダイレクト
    }
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg font-semibold">ログイン処理中...</p>
      </div>
    </div>
  );
}
