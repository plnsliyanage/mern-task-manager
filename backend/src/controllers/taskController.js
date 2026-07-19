import Task from "../models/Task.js";

// ======================================
// GET ALL TASKS
// ======================================

export const getTasks = async (req, res) => {
  try {
    res.json({
      message: "Get Tasks API",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// CREATE TASK
// ======================================

export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;

    // Validation
    if (!title || !dueDate) {
      return res.status(400).json({
        message: "Title and due date are required",
      });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      user: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// GET SINGLE TASK
// ======================================

export const getTaskById = async (req, res) => {
  try {
    res.json({
      message: "Get Single Task API",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// UPDATE TASK
// ======================================

export const updateTask = async (req, res) => {
  try {
    res.json({
      message: "Update Task API",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// DELETE TASK
// ======================================

export const deleteTask = async (req, res) => {
  try {
    res.json({
      message: "Delete Task API",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================================
// UPDATE TASK STATUS
// ======================================

export const updateTaskStatus = async (req, res) => {
  try {
    res.json({
      message: "Update Task Status API",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};