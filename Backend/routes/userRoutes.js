import express from "express";
import { registerUser,loginUser } from "../controller/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);

export default router;
