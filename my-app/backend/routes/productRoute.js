import express from "express";
import { getAllproducts,createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReviews } from "../controllers/productController.js";
import {isAuthenticationUser,authorizeRoles} from "../middleware/authentication.js";


const router = express.Router();


router.route("/products").get(getAllproducts) // here i have removed isAuthenticationUser to check frontend so please add when you come back

router.route("/admin/product/new").post(isAuthenticationUser,authorizeRoles("admin"), createProduct)

router.route("/admin/product/:id").put(isAuthenticationUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticationUser,authorizeRoles("admin"),deleteProduct)

router.route("/product/:id").get(getProductDetails)

router.route("/review").put(isAuthenticationUser,createProductReview)

router.route("/reviews").get(getProductReviews).delete(isAuthenticationUser,deleteReviews)


export default router