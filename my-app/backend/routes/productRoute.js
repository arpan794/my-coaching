import express from "express";
import { getAllproducts,createProduct, updateProduct, deleteProduct, getProductDetails } from "../controllers/productController.js";


const router = express.Router();


router.route("/products").get(getAllproducts)

router.route("/product/new").post(createProduct)

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)



export default router