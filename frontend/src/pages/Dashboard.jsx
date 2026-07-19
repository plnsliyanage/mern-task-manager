import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getTasksAPI } from "../features/task/taskAPI";

import { setTasks } from "../features/task/taskSlice";

import TaskForm from "../components/TaskForm";

import TaskList from "../components/TaskList";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await getTasksAPI(token);

      dispatch(setTasks(data));
    };

    if (token) {
      loadTasks();
    }
  }, [token, dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      <TaskForm />

      <TaskList />
    </div>
  );
};

export default Dashboard;
