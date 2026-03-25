import { useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const pageTitles = {
  "/": "대시보드",
  "/projects": "프로젝트",
  "/calendar": "캘린더",
  "/profile": "프로필",
};

function Header() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "DevBoard";
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 transition-colors">

      {/* 현재 페이지 타이틀 */}
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h1>

      {/* 우측 영역 */}
      <div className="flex items-center gap-4">

        {/* 다크모드 토글 버튼 */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* 유저 정보 */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">김개발</span>
          <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            K
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;