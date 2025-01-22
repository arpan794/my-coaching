import express from "express";
import { getAllproducts,createProduct, updateProduct, deleteProduct, getProductDetails } from "../controllers/productController.js";
import {isAuthenticationUser,authorizeRoles} from "../middleware/authentication.js";


const router = express.Router();


router.route("/products").get(isAuthenticationUser,getAllproducts)

router.route("/product/new").post(isAuthenticationUser,authorizeRoles("admin"), createProduct)

router.route("/product/:id").put(isAuthenticationUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticationUser,authorizeRoles("admin"),deleteProduct).get(getProductDetails)



export default router