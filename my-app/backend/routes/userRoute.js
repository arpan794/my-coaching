import express from "express";
import { forgotPassword, loginUser, logout, registerUser } from "../controllers/userController.js";


const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/logout").get(logout);




export default router