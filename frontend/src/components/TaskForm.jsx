import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../features/task/taskSlice";
import { createTaskAPI } from "../features/task/taskAPI";

import toast from "react-hot-toast";

const TaskForm = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const task = await createTaskAPI(formData, token);

      dispatch(addTask(task));

      toast.success("Task created successfully");

      setFormData({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
      });
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
    >
      <h2 className="text-3xl font-bold text-blue-950 mb-6">Create New Task</h2>

      {/* Title */}
      <div className="mb-5">
        <label className="block text-m font-semibold text-gray-700 mb-2">
          Task Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-950 focus:ring-2 focus:ring-blue-950 outline-none transition"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-m font-semibold text-gray-700 mb-2">
          Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Enter task description"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:border-blue-950 focus:ring-2 focus:ring-blue-950 outline-none transition"
        />
      </div>

      {/* Priority & Due Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-m font-semibold text-gray-700 mb-2">
            Priority
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-950 focus:ring-2 focus:ring-blue-950 outline-none transition"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-m font-semibold text-gray-700 mb-2">
            Due Date
          </label>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-950 focus:ring-2 focus:ring-blue-950 outline-none transition"
          />
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
