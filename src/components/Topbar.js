function Topbar({ title, onMenuClick, dark, onToggleDark }) {
  return (
    <header className="flex items-center gap-4 px-6 md:px-8 py-4 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <button
        onClick={onMenuClick}
        aria-label="Toggle menu"
        className="md:hidden text-xl bg-transparent border-none cursor-pointer"
      >
        ☰
      </button>
      <h1 className="text-lg font-semibold m-0">{title}</h1>

      <button
        onClick={onToggleDark}
        aria-label="Toggle dark mode"
        className="ml-auto px-3 py-1.5 rounded-md border border-gray-200 dark:border-slate-600 bg-transparent text-sm cursor-pointer transition duration-200 hover:bg-gray-100 dark:hover:bg-slate-700 active:scale-95"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Topbar;
