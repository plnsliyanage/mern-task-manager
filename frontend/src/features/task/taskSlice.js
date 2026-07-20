import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
  searchTerm: "",
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    // Get all tasks
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },

    // Create task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    // Update task
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload._id
      );

      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    // Delete task
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task._id !== action.payload
      );
    },

    // Update task status
    updateStatus: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload._id
      );

      if (index !== -1) {
        state.tasks[index].status = action.payload.status;
      }
    },

    // Filter
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    // Search
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    // Loading
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Error
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTasks,
  addTask,
  updateTask,
  removeTask,
  updateStatus,
  setFilter,
  setSearchTerm,
  setLoading,
  setError,
} = taskSlice.actions;

export default taskSlice.reducer;