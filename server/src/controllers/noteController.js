import Note from "../models/Note.js";
import { extractPDFText } from "../services/pdfService.js";

// Upload Note Controller
export const uploadNote = async (req, res) => {
  try {
    // Check file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "PDF file is required",
      });
    }

    // Extract PDF text
    const extractedText = await extractPDFText(
      req.file.path
    );

    // Save note in MongoDB
    const note = await Note.create({
      user: req.user._id,
      title: req.file.originalname,
      pdfUrl: req.file.path,
      extractedText,
      fileSize: req.file.size,
    });

    res.status(201).json({
      success: true,
      message: "PDF uploaded successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Notes
export const getUserNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      notes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};