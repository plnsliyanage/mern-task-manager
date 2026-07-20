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
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-xl font-bold mb-4">Create Task</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        className="w-full border p-2 mb-3 rounded"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 mb-3 rounded"
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      >
        <option value="low">Low</option>

        <option value="medium">Medium</option>

        <option value="high">High</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />

      <button className="bg-blue-600 text-white px-5 py-2 rounded">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
