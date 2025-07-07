import axios from "axios";

const API_URL = "https://backendmhs-production.up.railway.app/login";
const REGISTER_URL = "https://backendmhs-production.up.railway.app/register";

export const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data;
};

export const register = async (username, password, role) => {
  const response = await axios.post(REGISTER_URL, { username, password, role });
  return response.data;
};