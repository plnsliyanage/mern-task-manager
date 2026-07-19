import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  updateTask,
  removeTask,
  updateStatus,
} from "../features/task/taskSlice";

import {
  updateTaskAPI,
  deleteTaskAPI,
  updateTaskStatusAPI,
} from "../features/task/taskAPI";

import toast from "react-hot-toast";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const [edit, setEdit] = useState(false);

  const [data, setData] = useState({
    title: task.title,

    description: task.description,

    priority: task.priority,

    dueDate: task.dueDate.substring(0, 10),
  });

  const handleChange = (e) => {
    setData({
      ...data,

      [e.target.name]: e.target.value,
    });
  };

  // UPDATE

  const handleUpdate = async () => {
    try {
      const updated = await updateTaskAPI(
        task._id,

        data,

        token,
      );

      dispatch(updateTask(updated));

      toast.success("Task updated");

      setEdit(false);
    } catch (error) {
      toast.error("Update failed");
    }
  };

  // DELETE

  const handleDelete = async () => {
    try {
      await deleteTaskAPI(
        task._id,

        token,
      );

      dispatch(removeTask(task._id));

      toast.success("Task deleted");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  // STATUS

  const handleStatus = async () => {
    const newStatus = task.status === "pending" ? "completed" : "pending";

    const updated = await updateTaskStatusAPI(
      task._id,

      newStatus,

      token,
    );

    dispatch(updateStatus(updated));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      {edit ? (
        <div>
          <input
            name="title"
            value={data.title}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <select
            name="priority"
            value={data.priority}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          >
            <option value="low">Low</option>

            <option value="medium">Medium</option>

            <option value="high">High</option>
          </select>

          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">{task.title}</h2>

          <p>{task.description}</p>

          <p>
            Priority:
            {task.priority}
          </p>

          <p>
            Status:
            {task.status}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setEdit(true)}
              className="bg-blue-600 text-white px-3 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-3 py-2 rounded"
            >
              Delete
            </button>

            <button
              onClick={handleStatus}
              className="bg-green-600 text-white px-3 py-2 rounded"
            >
              Toggle Status
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
