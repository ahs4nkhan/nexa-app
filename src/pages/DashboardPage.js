import StatCard from "../components/StatCard";
import CompletionBar from "../components/CompletionBar";
import StatusChart from "../components/StatusChart";
import OwnerChart from "../components/OwnerChart";
import TaskCard from "../components/TaskCard";
import StatusMessage from "../components/StatusMessage";

function DashboardPage({ tasks, users, loading, error }) {
  if (loading) {
    return <StatusMessage title="Loading dashboard..." />;
  }

  if (error) {
    return <StatusMessage title="Something went wrong" text={error} />;
  }

  const completed = tasks.filter((task) => task.done).length;
  const open = tasks.length - completed;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  const recentTasks = tasks.slice(0, 5);

  // one entry per person who has tasks, for the bar chart
  const tasksPerPerson = users
    .map((user) => ({
      name: user.name.split(" ")[0],
      tasks: tasks.filter((task) => task.ownerId === user.id).length,
    }))
    .filter((item) => item.tasks > 0);

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        <StatCard label="Total Tasks" value={tasks.length} />
        <StatCard label="Completed" value={completed} />
        <StatCard label="Open" value={open} />
        <StatCard label="Team Members" value={users.length} />
      </div>

      <CompletionBar percent={percent} />

      <div className="grid gap-4 lg:grid-cols-2 mb-8">
        <StatusChart done={completed} open={open} />
        <OwnerChart data={tasksPerPerson} />
      </div>

      <h2 className="text-lg font-semibold mb-3">Recent Tasks</h2>
      <div className="flex flex-col gap-2.5">
        {recentTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
