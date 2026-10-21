import { useState } from "react";

const fieldClasses =
  "px-3 py-2.5 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 rounded-md text-sm transition focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30";

function AddTaskForm({ users, onAdd }) {
  const [title, setTitle] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please type a task title first.");
      return;
    }

    onAdd(title.trim(), Number(ownerId) || users[0].id, priority);
    setTitle("");
    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 mb-5"
    >
      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className={`flex-1 min-w-[200px] ${fieldClasses}`}
        />

        <select value={ownerId} onChange={(e) => setOwnerId(e.target.value)} className={fieldClasses}>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <select value={priority} onChange={(e) => setPriority(e.target.value)} className={fieldClasses}>
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>

        <button
          type="submit"
          className="bg-accent text-white px-4 py-2.5 rounded-md text-sm cursor-pointer transition duration-200 hover:bg-forest active:scale-95"
        >
          Add task
        </button>
      </div>

      {error && <p className="text-red-600 text-xs mt-2 mb-0">{error}</p>}
    </form>
  );
}

export default AddTaskForm;
