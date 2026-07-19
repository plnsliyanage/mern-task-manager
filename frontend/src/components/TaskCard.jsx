const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h3 className="text-xl font-bold">{task.title}</h3>

      <p className="text-gray-600">{task.description}</p>

      <div className="mt-3">
        <p>
          Status:
          <span className="font-semibold">{task.status}</span>
        </p>

        <p>
          Priority:
          <span className="font-semibold">{task.priority}</span>
        </p>

        <p>
          Due:
          {task.dueDate.substring(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
