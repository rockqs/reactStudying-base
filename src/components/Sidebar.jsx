import { NavLink } from "react-router-dom";

const menus = [
  { path: "/", label: "대시보드", icon: "📊" },
  { path: "/projects", label: "프로젝트", icon: "📁" },
  { path: "/calendar", label: "캘린더", icon: "📅" },
  { path: "/profile", label: "프로필", icon: "👤" },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 dark:bg-gray-950 text-white flex flex-col p-4 transition-colors">

      {/* 로고 */}
      <div className="text-2xl font-bold text-blue-400 mb-8 px-2">
        DevBoard
      </div>

      {/* 메뉴 목록 */}
      <nav className="flex flex-col gap-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer
              ${isActive
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <span>{menu.icon}</span>
            <span>{menu.label}</span>
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}

export default Sidebar;