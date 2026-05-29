import express from "express";

import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

import {
  uploadNote,
  getUserNotes,
} from "../controllers/noteController.js";

const router = express.Router();


// Upload PDF Route
router.post(
  "/upload",
  protect,
  upload.single("pdf"),
  uploadNote
);


// Get User Notes
router.get("/", protect, getUserNotes);

export default router;