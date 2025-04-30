import UserIcon from "./UserIcon";

export default function Header({ user, onLogin, onLogout }) {
    return (
      <header className="flex items-center justify-between bg-white px-8 py-4 border-b">
        <input
          type="text"
          className="w-1/2 border rounded px-3 py-2 bg-gray-50"
          placeholder="検索窓サンプル"
        />
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <span className="material-icons">help_outline</span>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <span className="material-icons">notifications</span>
          </button>
          {user ? (
            <button onClick={onLogout} className="focus:outline-none">
              <UserIcon user={user} size={32} />
            </button>
          ) : (
            <button onClick={onLogin} className="focus:outline-none">
              <UserIcon user={null} size={32} />
            </button>
          )}
        </div>
      </header>
    );
  }
