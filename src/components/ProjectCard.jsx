const statusColors = {
  "진행중": "bg-blue-100 text-blue-600",
  "완료": "bg-green-100 text-green-600",
  "대기중": "bg-gray-100 text-gray-500",
};

const priorityColors = {
  "높음": "text-red-500",
  "중간": "text-yellow-500",
  "낮음": "text-green-500",
};

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm flex flex-col gap-4 transition-colors">

      {/* 상단: 제목 + 상태 */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800 dark:text-white">{project.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      {/* 설명 */}
      <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>

      {/* 진행률 바 */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>진행률</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* 하단: 태그 + 우선순위 */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <span className={`text-xs font-medium ${priorityColors[project.priority]}`}>
          ● {project.priority}
        </span>
      </div>

    </div>
  );
}

export default ProjectCard;