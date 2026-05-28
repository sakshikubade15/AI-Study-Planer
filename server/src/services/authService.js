import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


// Register API
export const registerUser = async (userData) => {

  const response = await API.post(
    "/auth/register",
    userData
  );

  return response.data;
};


// Login API
export const loginUser = async (userData) => {

  const response = await API.post(
    "/auth/login",
    userData
  );

  return response.data;
};