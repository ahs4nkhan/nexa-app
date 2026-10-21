import TeamCard from "../components/TeamCard";
import StatusMessage from "../components/StatusMessage";

function TeamPage({ users, tasks, loading, error }) {
  if (loading) {
    return <StatusMessage title="Loading team..." />;
  }

  if (error) {
    return <StatusMessage title="Something went wrong" text={error} />;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => {
        const taskCount = tasks.filter((task) => task.ownerId === user.id).length;
        return <TeamCard key={user.id} user={user} taskCount={taskCount} />;
      })}
    </div>
  );
}

export default TeamPage;
