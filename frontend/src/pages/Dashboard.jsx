import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import TaskForm from "../components/TaskForm";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";

import { getTasksAPI } from "../features/task/taskAPI";
import { setTasks } from "../features/task/taskSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasks = await getTasksAPI(token);
        dispatch(setTasks(tasks));
      } catch (error) {
        console.error(error);
        toast.error("Failed to load tasks");
      }
    };

    if (token) {
      loadTasks();
    }
  }, [dispatch, token]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Task Dashboard</h1>

        {/* Create Task */}
        <TaskForm />

        {/* Search */}
        <SearchBar />

        {/* Filter */}
        <FilterBar />

        {/* Task List */}
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
