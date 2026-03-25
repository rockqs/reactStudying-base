import { stats, projects } from "../data/mockData";
import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";
import SkeletonCard from "../components/SkeletonCard";
import useLoading from "../hooks/useLoading";

function SkeletonStatCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col gap-2">
      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
    </div>
  );
}

function Dashboard() {
  const isLoading = useLoading(1500);

  return (
    <div className="flex flex-col gap-8">

      {/* 통계 카드 섹션 */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          전체 현황
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {isLoading
            ? Array(4).fill(0).map((_, i) => <SkeletonStatCard key={i} />)
            : stats.map((stat) => (
                <StatCard key={stat.id} label={stat.label} value={stat.value} />
              ))
          }
        </div>
      </section>

      {/* 프로젝트 카드 섹션 */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          최근 프로젝트
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {isLoading
            ? Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />)
            : projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
          }
        </div>
      </section>

    </div>
  );
}

export default Dashboard;