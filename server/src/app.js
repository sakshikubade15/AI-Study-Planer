import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";

import authRoutes from "./routes/authRoutes.js";

import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/user", userRoutes);


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/notes", noteRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Study Planer API Running",
  });
});

export default app;