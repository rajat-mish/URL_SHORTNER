import axios from "axios";
import instance from "../utils/axiosinstance.js";

export const createShortUrl = async (url) => {
  const { data } = await instance.post("/api/create", { originalUrl: url });
  return data.shortUrl;
};
