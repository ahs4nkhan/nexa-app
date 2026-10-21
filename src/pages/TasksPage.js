import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";
import StatusMessage from "../components/StatusMessage";
import useTaskFilter from "../hooks/useTaskFilter";

function TasksPage({ tasks, users, loading, error, onToggle, onAdd, onEdit, onDelete, onReset }) {
  const { query, setQuery, filter, setFilter, visibleTasks } = useTaskFilter(tasks);

  if (loading) {
    return <StatusMessage title="Loading tasks..." />;
  }

  if (error) {
    return <StatusMessage title="Something went wrong" text={error} />;
  }

  return (
    <div>
      <AddTaskForm users={users} onAdd={onAdd} />

      <div className="flex flex-wrap gap-3 mb-5">
        <SearchBar value={query} onChange={setQuery} />
        <FilterBar active={filter} onChange={setFilter} />
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-gray-500 dark:text-slate-400 text-sm m-0">
          Showing {visibleTasks.length} of {tasks.length} tasks
        </p>
        <button
          onClick={onReset}
          className="bg-transparent border-none text-sm text-accent dark:text-emerald-400 cursor-pointer transition-opacity hover:opacity-70"
        >
          Reset to API data
        </button>
      </div>

      {visibleTasks.length === 0 ? (
        <StatusMessage title="No tasks match your search" />
      ) : (
        <div className="flex flex-col gap-2.5">
          {visibleTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksPage;
