import Task from "../models/Task.js";

// ======================================
// GET ALL TASKS (ONLY LOGGED-IN USER)
// ======================================

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(tasks);
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

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        // Check ownership

        if (!task.user.equals(req.user._id)) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        res.status(200).json(task);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ======================================
// UPDATE TASK
// ======================================

export const updateTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        // Check ownership

        if (!task.user.equals(req.user._id)) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        const {
            title,
            description,
            priority,
            dueDate,
            status
        } = req.body;

        task.title = title ?? task.title;
        task.description = description ?? task.description;
        task.priority = priority ?? task.priority;
        task.dueDate = dueDate ?? task.dueDate;
        task.status = status ?? task.status;

        const updatedTask = await task.save();

        res.status(200).json(updatedTask);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ======================================
// DELETE TASK
// ======================================

export const deleteTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        // Check ownership

        if (!task.user.equals(req.user._id)) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        await task.deleteOne();

        res.status(200).json({
            message: "Task deleted successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ======================================
// UPDATE TASK STATUS
// ======================================

// ======================================
// UPDATE TASK STATUS
// ======================================

export const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    // Check ownership
    if (!task.user.equals(req.user._id)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    const { status } = req.body;

    // Validate status
    if (!["pending", "completed"].includes(status)) {
      return res.status(400).json({
        message: "Status must be 'pending' or 'completed'",
      });
    }

    task.status = status;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};