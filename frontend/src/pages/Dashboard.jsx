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
    <div className="min-h-screen bg-slate-100">
      {/* Header */}

      {/* Main Content */}

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Create Task Section */}

        <div className=" mb-8">
          <TaskForm />
        </div>

        {/* Search and Filter Section */}

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-950 mb-4">
            Search & Filter Tasks
          </h2>

          <div className="mb-5">
            <SearchBar />
          </div>

          <FilterBar />
        </div>

        {/* Task List Section */}

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
