function ProgressCard({ progress }) {
  const { path, projectName, percent, tasks, teammates } = progress;

  return (
    <div className="w-full max-w-md mx-auto bg-cream-card border border-sand rounded-2xl shadow-xl shadow-black/5 overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-sand">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-400">{path}</span>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs text-gray-400 mb-1">Project progress</p>
            <h3 className="font-serif text-xl font-semibold">{projectName}</h3>
          </div>
          <span className="bg-accent-light text-forest text-sm font-semibold px-2.5 py-1 rounded-full">
            {percent}%
          </span>
        </div>

        <div className="h-1.5 bg-sand rounded-full overflow-hidden mb-5">
          <div className="h-full bg-forest transition-all duration-700" style={{ width: `${percent}%` }} />
        </div>

        <ul className="mb-5">
          {tasks.map((task) => (
            <li key={task.name} className="flex items-center gap-3 py-2 text-sm border-b border-sand last:border-b-0">
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                  task.done ? "bg-accent-light border-accent-light text-forest" : "border-sand"
                }`}
              >
                {task.done ? "✓" : ""}
              </span>
              <span className="flex-1">{task.name}</span>
              <span className={`text-xs ${task.done ? "text-forest" : "text-orange-600"}`}>
                {task.done ? "Done" : "In progress"}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex -space-x-2">
            {teammates.map((initial) => (
              <span
                key={initial}
                className="w-7 h-7 rounded-full bg-forest text-white text-xs flex items-center justify-center border-2 border-cream-card"
              >
                {initial}
              </span>
            ))}
          </div>
          <span>{teammates.length} teammates online</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
