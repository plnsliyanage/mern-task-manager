import express from "express";
import cors from "cors";

import authRoutes from "./src/routes/authRoutes.js";
import taskRoutes from "./src/routes/taskRoutes.js";


const app=express();


app.use(cors());

app.use(express.json());


app.use(
"/api/auth",
authRoutes
);

app.use("/api/tasks", taskRoutes);



export default app;