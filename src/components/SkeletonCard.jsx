function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm flex flex-col gap-4">

      {/* 제목 + 상태 뱃지 */}
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      </div>

      {/* 설명 */}
      <div className="flex flex-col gap-2">
        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>

      {/* 진행률 바 */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-3 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 animate-pulse" />
      </div>

      {/* 태그 + 우선순위 */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          <div className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
        </div>
        <div className="h-4 w-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>

    </div>
  );
}

export default SkeletonCard;