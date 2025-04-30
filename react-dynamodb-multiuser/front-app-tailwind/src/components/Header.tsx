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
            <div className="flex items-center space-x-2">
              {user.picture && (
                <img
                  src={user.picture}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <button
                className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700"
                onClick={onLogout}
              >
                {user.name.charAt(0)}
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700"
              onClick={onLogin}
            >
              G
            </button>
          )}
        </div>
      </header>
    );
  }
