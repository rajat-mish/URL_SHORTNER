import axios from "axios";
import instance from "../utils/axiosinstance.js";

export const loginUser = async (password, email) => {
  const { data } = await instance.post("/api/auth/login", { email, password });
  return data;
};

export const registerUser = async (username, email, password) => {
  const { data } = await instance.post("/api/auth/register", {
    username,
    email,
    password,
  });
  return data;
};

export const logoutUser = async () => {
  await instance.get("/api/auth/logout");
};


export const getCurrentUser = async () => {
  const { data } = await instance.get("/api/auth/me");
  return data;
};
