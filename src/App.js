import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ToastContainer from "./components/ToastContainer";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import TasksPage from "./pages/TasksPage";
import TeamPage from "./pages/TeamPage";
import NotFoundPage from "./pages/NotFoundPage";
import useNexaData from "./hooks/useNexaData";
import useDarkMode from "./hooks/useDarkMode";
import useToasts from "./hooks/useToasts";

const TITLES = {
  "/dashboard": "Dashboard",
  "/dashboard/tasks": "Tasks",
  "/dashboard/team": "Team",
};

function Layout({ sidebarOpen, setSidebarOpen, dark, onToggleDark, children }) {
  const location = useLocation();
  const title = TITLES[location.pathname] || "Nexa";

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-[5] md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 min-w-0">
          <Topbar
            title={title}
            onMenuClick={() => setSidebarOpen((open) => !open)}
            dark={dark}
            onToggleDark={onToggleDark}
          />
          <main className="p-6 md:p-8">
            <div key={location.pathname} className="animate-fade-up">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { users, tasks, loading, error, toggleTask, addTask, editTask, deleteTask, resetData } =
    useNexaData();
  const { dark, toggleDark } = useDarkMode();
  const { toasts, showToast, removeToast } = useToasts();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // wrap each action so it also shows a small notification
  function handleToggle(id) {
    const task = tasks.find((item) => item.id === id);
    toggleTask(id);
    showToast(task && !task.done ? "Task marked as done" : "Task marked as open");
  }

  function handleAdd(title, ownerId, priority) {
    addTask(title, ownerId, priority);
    showToast("Task added");
  }

  function handleEdit(id, title) {
    editTask(id, title);
    showToast("Task updated");
  }

  function handleDelete(id) {
    deleteTask(id);
    showToast("Task deleted");
  }

  async function handleReset() {
    await resetData();
    showToast("Tasks reset from the API");
  }

  const layoutProps = { sidebarOpen, setSidebarOpen, dark, onToggleDark: toggleDark };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage tasks={tasks} loading={loading} error={error} onToggle={handleToggle} />}
        />

        <Route
          path="/dashboard"
          element={
            <Layout {...layoutProps}>
              <DashboardPage tasks={tasks} users={users} loading={loading} error={error} />
            </Layout>
          }
        />
        <Route
          path="/dashboard/tasks"
          element={
            <Layout {...layoutProps}>
              <TasksPage
                tasks={tasks}
                users={users}
                loading={loading}
                error={error}
                onToggle={handleToggle}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onReset={handleReset}
              />
            </Layout>
          }
        />
        <Route
          path="/dashboard/team"
          element={
            <Layout {...layoutProps}>
              <TeamPage users={users} tasks={tasks} loading={loading} error={error} />
            </Layout>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ToastContainer toasts={toasts} onClose={removeToast} />
    </BrowserRouter>
  );
}

export default App;
