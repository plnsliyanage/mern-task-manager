export const getTasks = (req, res) => {
  res.json({ message: "Get Tasks API" });
};

export const createTask = (req, res) => {
  res.json({ message: "Create Task API" });
};

export const getTaskById = (req, res) => {
  res.json({ message: "Get Single Task API" });
};

export const updateTask = (req, res) => {
  res.json({ message: "Update Task API" });
};

export const deleteTask = (req, res) => {
  res.json({ message: "Delete Task API" });
};

export const updateTaskStatus = (req, res) => {
  res.json({ message: "Update Task Status API" });
};
