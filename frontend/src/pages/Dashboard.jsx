import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      <TaskForm />

      <TaskList />
    </div>
  );
};

export default Dashboard;
