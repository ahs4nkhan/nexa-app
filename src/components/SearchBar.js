function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search tasks or people..."
      className="flex-1 min-w-[240px] px-3 py-2.5 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400 border border-gray-200 dark:border-slate-600 rounded-md text-sm transition focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
    />
  );
}

export default SearchBar;
