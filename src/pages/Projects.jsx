import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects as initialProjects } from "../data/mockData";
import ProjectCard from "../components/ProjectCard";
import SkeletonCard from "../components/SkeletonCard";
import Modal from "../components/Modal";
import ProjectForm from "../components/ProjectForm";

const filters = ["전체", "진행중", "완료", "대기중"];

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 필터 바뀔 때마다 로딩 효과
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredProjects = activeFilter === "전체"
    ? projects
    : projects.filter((p) => p.status === activeFilter);

  const handleAddProject = (newProject) => {
    setProjects((prev) => [...prev, newProject]);
  };

  return (
    <div className="flex flex-col gap-6">

      {/* 상단 타이틀 + 버튼 */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          전체 프로젝트
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          + 새 프로젝트
        </button>
      </div>

      {/* 필터 버튼 */}
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 프로젝트 카드 목록 */}
      {isLoading ? (
        <div className="grid grid-cols-3 gap-4">
          {Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-16">
          해당 상태의 프로젝트가 없어요.
        </div>
      )}

      {/* 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="새 프로젝트 추가"
      >
        <ProjectForm
          onSubmit={handleAddProject}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

    </div>
  );
}

export default Projects;