import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


// Upload Note
export const uploadNote = async (
  formData,
  token
) => {

  const response = await API.post(
    "/notes/upload",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};