import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks, filter, searchTerm } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    // Filter by status
    const matchesFilter = filter === "all" || task.status === filter;

    // Search by title or description
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>

      {filteredTasks.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
          No tasks found.
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredTasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
