import fs from "fs";

import * as pdfParse from "pdf-parse";


// Extract PDF text
export const extractPDFText = async (filePath) => {

  try {

    // Read PDF file
    const dataBuffer = fs.readFileSync(filePath);

    // Parse PDF
    const data = await pdfParse(dataBuffer);

    // Return extracted text
    return data.text;

  } catch (error) {

    throw new Error("PDF extraction failed");

  }

};