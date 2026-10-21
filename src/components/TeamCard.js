function TeamCard({ user, taskCount }) {
  const initial = user.name.charAt(0);

  return (
    <div className="flex-1 min-w-[260px] flex items-center gap-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
        {initial}
      </div>
      <div>
        <p className="text-sm m-0">{user.name}</p>
        <p className="text-gray-500 dark:text-slate-400 text-xs mt-0.5">{user.email}</p>
        <p className="text-gray-500 dark:text-slate-400 text-xs mt-0.5">{taskCount} tasks assigned</p>
      </div>
    </div>
  );
}

export default TeamCard;
