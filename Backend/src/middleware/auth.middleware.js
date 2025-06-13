import { verifyToken } from "../utils/helper.js";
import { findUserById } from "../dao/user.dao.js";

export const  authMiddleware = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    console.log("Invalid token"+token);
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = verifyToken(token);
    const user = await findUserById(decoded.userId);
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log('Something went wrong');
    return res.status(401).json({ message: "Unauthorized" });
  }
};
