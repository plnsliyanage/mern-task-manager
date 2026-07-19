import { useSelector } from "react-redux";

import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <div className="grid gap-4">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
