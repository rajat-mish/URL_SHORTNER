import axios from "axios";
import instance from "../utils/axiosinstance.js";



// export const createShortUrl = async (url) => {
//   const { data } = await instance.post("/create", { originalUrl: url });
//   return data.shortUrl;
// };


export const createShortUrl = async (url, customShortUrl) => {
  const { data } = await instance.post("/create", { originalUrl: url, customShortUrl });
  return data.shortUrl;
};

