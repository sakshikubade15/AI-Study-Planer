import multer from "multer";


// Storage configuration
const storage = multer.diskStorage({

  // Folder destination
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  // File naming
  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);
  },

});


// File filter
const fileFilter = (req, file, cb) => {

  // Allow only PDFs
  if (file.mimetype === "application/pdf") {
    cb(null, true);

  } else {

    cb(
      new Error("Only PDF files allowed"),
      false
    );

  }

};


// Upload configuration
const upload = multer({

  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

});


export default upload;