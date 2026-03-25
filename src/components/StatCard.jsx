function StatCard({ label, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm flex flex-col gap-2 transition-colors">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-3xl font-bold text-gray-800 dark:text-white">{value}</span>
    </div>
  );
}

export default StatCard;