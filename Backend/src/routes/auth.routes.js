import express from 'express';
import { register, login, get_current_user } from '../controller/auth.controller.js';
import { logout } from '../controller/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';


const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",authMiddleware,get_current_user);




export default router;