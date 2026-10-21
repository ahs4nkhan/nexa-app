function CompletionBar({ percent }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-5 mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-semibold">Overall completion</span>
        <span className="text-gray-500 dark:text-slate-400">{percent}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default CompletionBar;
