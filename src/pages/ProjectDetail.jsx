import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/mockData";
import useLocalStorage from "../hooks/useLocalStorage";  // 추가

const statusColors = {
  "진행중": "bg-blue-100 text-blue-600",
  "완료": "bg-green-100 text-green-600",
  "대기중": "bg-gray-100 text-gray-500",
};

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  // 기존 useState + useEffect 2개 → 한 줄로 교체 ✅
  const [tasks, setTasks] = useLocalStorage(
    `tasks-${id}`,
    project?.tasks || []
  );

  const handleToggle = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const doneCount = tasks.filter((t) => t.done).length;
  const totalCount = tasks.length;
  const progress = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-gray-500">프로젝트를 찾을 수 없어요.</p>
        <button
          onClick={() => navigate("/projects")}
          className="text-blue-500 hover:underline text-sm"
        >
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">

      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white flex items-center gap-1 w-fit"
      >
        ← 뒤로가기
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col gap-3 transition-colors">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
          <span className={`text-sm px-3 py-1 rounded-full font-medium ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>

        <div>
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>진행률</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-400">마감일: {project.dueDate}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col gap-4 transition-colors">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-700 dark:text-white">태스크 목록</h3>
          <span className="text-sm text-gray-400">
            {doneCount} / {totalCount} 완료
          </span>
        </div>

        <ul className="flex flex-col gap-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => handleToggle(task.id)}
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                ${task.done
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300"
                }`}
              >
                {task.done && <span className="text-white text-xs">✓</span>}
              </div>
              <span className={`text-sm transition-colors
                ${task.done
                  ? "line-through text-gray-400"
                  : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {task.content}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default ProjectDetail;