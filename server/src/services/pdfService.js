import fs from "fs";
import pdf from "pdf-parse";

export const extractPDFText = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);

    const data = await pdf(dataBuffer);

    return data.text;
  } catch (error) {
    console.error("PDF Error:", error);
    throw error;
  }
};