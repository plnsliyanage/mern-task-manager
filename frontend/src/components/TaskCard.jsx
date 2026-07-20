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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      {edit ? (
        <div>
          <h3 className="text-xl font-semibold text-blue-950 mb-4">
            Edit Task
          </h3>

          <input
            name="title"
            value={data.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
          />

          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
          />

          <select
            name="priority"
            value={data.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
          >
            <option value="low">Low</option>

            <option value="medium">Medium</option>

            <option value="high">High</option>
          </select>

          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="bg-blue-950 text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition"
            >
              Save Changes
            </button>

            <button
              onClick={() => setEdit(false)}
              className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Title */}

          <h2 className="text-2xl font-bold text-blue-950 mb-2">
            {task.title}
          </h2>

          <p className="text-gray-600 mb-4">{task.description}</p>

          {/* Details */}

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold text-blue-950">Priority:</span>{" "}
              {task.priority}
            </p>

            <p>
              <span className="font-semibold text-blue-950">Status:</span>{" "}
              <span
                className={
                  task.status === "completed"
                    ? "text-green-600 font-semibold"
                    : "text-orange-600 font-semibold"
                }
              >
                {task.status}
              </span>
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => setEdit(true)}
              className="bg-blue-950 text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>

            <button
              onClick={handleStatus}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
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
