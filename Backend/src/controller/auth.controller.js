import { registerUser } from "../services/auth.service.js";
import{tryCatchWrapper} from "../utils/tryCatchWrapper.js";
import { cookieOptions } from "../config/config.js";
import { loginUser } from "../services/auth.service.js"; 

export const register = tryCatchWrapper(async (req, res) => {
    // add jwt register code
    const{username,email,password}=req.body;
    const token=await registerUser({username,email,password});
    res.cookie('accessToken', token, cookieOptions);
    res.status(200).json({message:"login success"});
})

export const login = tryCatchWrapper(async (req, res) => {
   const {email,password}=req.body;
   console.log(cookieOptions);
   const {token,user}=await loginUser({email,password});
   res.cookie('accessToken', token, cookieOptions);
   //console.log(token)
   res.status(200).json({user:user,message:"login success"}); 
})

// export const logout = tryCatchWrapper(async (req, res) => {
//     res.clearCookie('accessToken', cookieOptions);
//     res.status(200).json({message:"logout success"});
// })


export const logout = tryCatchWrapper(async (req, res) => {
  // Clear the access token cookie
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax',
    path: '/'
  });
  
  // Also clear any other cookies if you have them
  // For example, if you have a refresh token:
  // res.clearCookie('refreshToken', {...});
  
  // Send success response
  res.status(200).json({ message: "Logged out successfully" });
});



export const get_current_user = tryCatchWrapper(async (req, res) => {
    res.status(200).json({user:req.user});
})

