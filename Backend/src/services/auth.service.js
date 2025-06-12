import User from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import { createUser,findUserByEmail,findUserByEmailByPassword } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";


export const registerUser = async ({ username, email, password }) => {
    const user = await findUserByEmail(email);
    if (user) {
      throw new ConflictError('User already exists');
    }
    const newUser= await createUser({ username, email, password });
    const token =await signToken({ userId: newUser._id });
    return newUser;
    
  };

//   export const loginUser = async ({ email, password }) => {
//     const user = await findUserByEmailByPassword(email);
//    if(!user){
//     throw new Error('Invalid Credentials');
//    }
// const isPasswordValid = await user.comparePassword(password);
// if(!isPasswordValid){
//   throw new Error('Invalid Credentials');
// };
//     const token = signToken({ userId: user._id });
//     return {token,user};
//   };


export const loginUser = async ({ email, password }) => {
  const user = await findUserByEmailByPassword(email);
  if (!user) {
    throw new Error('Invalid Credentials');
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Invalid Credentials');
  }

  const token = signToken({ userId: user._id });

  // Remove password before sending
  const userObj = user.toObject();
  delete userObj.password;

  return { token, user: userObj };
};
