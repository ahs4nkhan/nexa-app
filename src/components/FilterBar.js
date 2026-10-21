const OPTIONS = [
  { id: "all", label: "All" },
  { id: "open", label: "Open" },
  { id: "done", label: "Done" },
];

function FilterBar({ active, onChange }) {
  return (
    <div className="flex gap-2">
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`px-3.5 py-2.5 border rounded-md text-sm cursor-pointer transition duration-200 active:scale-95 ${
            option.id === active
              ? "bg-accent text-white border-accent"
              : "bg-white text-gray-900 border-gray-200 hover:border-accent hover:text-accent dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
