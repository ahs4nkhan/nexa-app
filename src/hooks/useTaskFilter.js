import { useMemo, useState } from "react";

function useTaskFilter(tasks) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const visibleTasks = useMemo(() => {
    const search = query.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        !search ||
        task.title.toLowerCase().includes(search) ||
        task.ownerName.toLowerCase().includes(search);

      const matchesFilter =
        filter === "all" ||
        (filter === "open" && !task.done) ||
        (filter === "done" && task.done);

      return matchesSearch && matchesFilter;
    });
  }, [tasks, query, filter]);

  return { query, setQuery, filter, setFilter, visibleTasks };
}

export default useTaskFilter;
