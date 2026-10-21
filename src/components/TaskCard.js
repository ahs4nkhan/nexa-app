import { useState } from "react";

const PRIORITY_STYLES = {
  high: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  low: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
};

const smallButton =
  "px-3 py-2 border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 rounded-md text-xs cursor-pointer transition duration-200 active:scale-95";

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);

  function saveEdit() {
    if (!draft.trim()) return;
    onEdit(task.id, draft.trim());
    setEditing(false);
  }

  function cancelEdit() {
    setDraft(task.title);
    setEditing(false);
  }

  function handleDelete() {
    if (window.confirm("Delete this task?")) {
      onDelete(task.id);
    }
  }

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        task.done ? "opacity-60" : ""
      }`}
    >
      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
              if (e.key === "Escape") cancelEdit();
            }}
            autoFocus
            className="w-full px-2 py-1.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 rounded-md text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        ) : (
          <p className={`text-sm m-0 ${task.done ? "line-through" : ""}`}>{task.title}</p>
        )}

        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-gray-500 dark:text-slate-400 text-xs">{task.ownerName}</span>
          <span
            className={`text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full ${PRIORITY_STYLES[task.priority]}`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {editing ? (
          <>
            <button onClick={saveEdit} className={`${smallButton} hover:bg-accent hover:text-white hover:border-accent`}>
              Save
            </button>
            <button onClick={cancelEdit} className={`${smallButton} hover:bg-gray-200 dark:hover:bg-slate-600`}>
              Cancel
            </button>
          </>
        ) : (
          <>
            {onToggle && (
              <button
                onClick={() => onToggle(task.id)}
                className={`${smallButton} hover:bg-accent hover:text-white hover:border-accent`}
              >
                {task.done ? "Mark open" : "Mark done"}
              </button>
            )}
            {onEdit && (
              <button onClick={() => setEditing(true)} className={`${smallButton} hover:bg-gray-200 dark:hover:bg-slate-600`}>
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={handleDelete}
                className={`${smallButton} hover:bg-red-600 hover:text-white hover:border-red-600`}
              >
                Delete
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
