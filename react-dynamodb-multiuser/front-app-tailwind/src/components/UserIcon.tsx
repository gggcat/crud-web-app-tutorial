import React from "react";

const UserIcon = ({ user, size = 40 }) => {
  const getInitials = (name) => {
    if (!name) return "";
    return name.trim().charAt(0).toUpperCase();
  };

  const bgColor = "bg-[#795548]"; // Google風茶色

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full overflow-hidden ${bgColor} text-white font-bold`}
      style={{ width: size, height: size, fontSize: size * 0.6 }}
      title={user?.name}
    >
      {user?.picture ? (
        <img
          src={user.picture}
          alt={user.name || "User"}
          className="w-full h-full object-cover rounded-full"
        />
      ) : user?.name ? (
        getInitials(user.name)
      ) : (
        <svg className="w-3/5 h-3/5 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )}
    </span>
  );
};

export default UserIcon;
