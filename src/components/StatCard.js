function StatCard({ label, value }) {
  return (
    <div className="flex-1 min-w-[160px] bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <p className="text-gray-500 dark:text-slate-400 text-sm mb-1.5">{label}</p>
      <p className="text-2xl font-bold m-0">{value}</p>
    </div>
  );
}

export default StatCard;
