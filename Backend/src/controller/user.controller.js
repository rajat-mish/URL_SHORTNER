import { getShortUrl } from "../dao/user.dao.js";
import { tryCatchWrapper } from "../utils/tryCatchWrapper.js";


export const getUserUrls = async (req, res, next) => {
  try {
    const { _id } = req.user;
    console.log("User ID:", _id);

    const urls = await getShortUrl(_id);

    res.status(200).json({ urls });
  } catch (error) {
    next(error); // Pass to errorHandler middleware
  }
};
