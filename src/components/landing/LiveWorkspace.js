import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import FilterBar from "../FilterBar";
import TaskCard from "../TaskCard";
import StatusMessage from "../StatusMessage";
import useTaskFilter from "../../hooks/useTaskFilter";

const PREVIEW_COUNT = 6;

function LiveWorkspace({ tasks, loading, error, onToggle }) {
  const { query, setQuery, filter, setFilter, visibleTasks } = useTaskFilter(tasks);
  const [showAll, setShowAll] = useState(false);

  const shownTasks = showAll ? visibleTasks : visibleTasks.slice(0, PREVIEW_COUNT);

  let body;

  if (loading) {
    body = <StatusMessage title="Loading tasks..." text="Pulling the latest data from the API." />;
  } else if (error) {
    body = <StatusMessage title="Could not load tasks" text={error} />;
  } else if (visibleTasks.length === 0) {
    body = <StatusMessage title="No tasks match your search" text="Try another name or switch the filter to All." />;
  } else {
    body = (
      <>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {shownTasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggle={onToggle} />
          ))}
        </div>

        {visibleTasks.length > PREVIEW_COUNT && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll((current) => !current)}
              className="border border-ink text-ink px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition duration-200 hover:bg-ink hover:text-white active:scale-95"
            >
              {showAll ? "Show less" : `Show all ${visibleTasks.length} tasks`}
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <section id="workspace" className="px-6 md:px-12 py-16 text-center">
      <p className="text-forest text-xs font-semibold uppercase tracking-widest mb-2">Live workspace</p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-3">Tasks coming from the API</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8">
        Search by task or teammate, then filter by status. This list is fetched live from JSONPlaceholder.
      </p>

      <div className="max-w-5xl mx-auto text-left">
        <div className="flex flex-wrap gap-3 mb-5">
          <SearchBar value={query} onChange={setQuery} />
          <FilterBar active={filter} onChange={setFilter} />
        </div>

        {body}

        <div className="text-center mt-8">
          <Link to="/dashboard/tasks" className="text-forest text-sm font-medium no-underline hover:underline">
            Manage all tasks in the dashboard &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LiveWorkspace;
