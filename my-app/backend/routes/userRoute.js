import express from "express";
import { deleteUser, forgotPassword, getAllUser, getSingleUser, getUserDetails, loginUser, logout, registerUser, resetPassword, updatePassword, updateProfile, updateUserRole } from "../controllers/userController.js";
import {isAuthenticationUser,authorizeRoles} from "../middleware/authentication.js"



const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticationUser,getUserDetails);

router.route("/password/update").put(isAuthenticationUser,updatePassword);

router.route("/me/update").put(isAuthenticationUser,updateProfile);

router.route("/admin/users").get(isAuthenticationUser,authorizeRoles("admin"),getAllUser);

router.route("/admin/user/:id").get(isAuthenticationUser,authorizeRoles("admin"),getSingleUser).put(isAuthenticationUser,authorizeRoles("admin"),updateUserRole).delete(isAuthenticationUser,authorizeRoles("admin"),deleteUser)



export default router