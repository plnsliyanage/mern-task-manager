import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import TaskForm from "../components/TaskForm";

import TaskList from "../components/TaskList";

import { getTasksAPI } from "../features/task/taskAPI";

import { setTasks } from "../features/task/taskSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasksAPI(token);

      dispatch(setTasks(data));
    };

    if (token) {
      fetchTasks();
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
