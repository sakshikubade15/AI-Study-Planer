import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());

// Allow frontend requests
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Logger
app.use(morgan("dev"));

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Study Planet API Running",
  });
});

export default app;