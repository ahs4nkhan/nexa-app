import { Link, NavLink } from "react-router-dom";

function linkClasses({ isActive }) {
  return `px-3 py-2.5 rounded-md text-sm no-underline transition-colors duration-200 ${
    isActive
      ? "bg-accent-light text-accent font-semibold dark:bg-emerald-900/40 dark:text-emerald-300"
      : "text-gray-900 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-700"
  }`;
}

function Sidebar({ open, onClose }) {
  return (
    <aside
      className={`fixed md:static top-0 left-0 bottom-0 z-10 w-56 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 p-5 transform transition duration-300 md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="font-serif font-semibold text-2xl text-accent dark:text-emerald-400 mb-6">Nexa</div>

      <nav className="flex flex-col gap-1">
        <NavLink to="/dashboard" end onClick={onClose} className={linkClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/tasks" onClick={onClose} className={linkClasses}>
          Tasks
        </NavLink>
        <NavLink to="/dashboard/team" onClick={onClose} className={linkClasses}>
          Team
        </NavLink>
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
        <Link
          to="/"
          className="block px-3 py-2.5 rounded-md text-sm text-gray-500 dark:text-slate-400 no-underline transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-slate-100"
        >
          &larr; Back to website
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
