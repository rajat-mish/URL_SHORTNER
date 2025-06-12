
import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

// export const findUserByEmailByPassword = async (email) => {
//     const user = await User.findOne({ email });
//     return user;
// }

export const findUserByEmailByPassword = async (email) => {
    const user = await User.findOne({ email }).select("+password");
    return user;
};



export const findUserById = async (id) => {
    const user = await User.findById(id);
    return user;
}

export const createUser = async (user) => {
    const newUser = new User(user);
    await newUser.save();
    return newUser;
}

// export const updateUser = async (id, name, email, password) => {
//  const user=await User.findById(id);
//  if(!user){
//     throw new Error("User not found");
//  }
//  if(name){
//     user.name=name;
//  }
//  if(email){
//     user.email=email;
//  }
//  if(password){
//     user.password=password;
//  }
//  await user.save();
//  return user;
// }

// export const deleteUser = async (id) => {
//     const user = await User.findByIdAndDelete(id);
//     return user;
// }

