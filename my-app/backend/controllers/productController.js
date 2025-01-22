import asyncHandler from "../middleware/asyncHandler.js";
import { Product } from "../models/productModel.js";
import ApiFeatures from "../utils/apiFeatures.js";
import ErrorHandler from "../utils/errorHandler.js";


// create product -- admin

 const createProduct = asyncHandler (async (req,res,next) => {
    req.body.user = req.user.id;
     const product = await Product.create(req.body);
     res.status(201).json({
        success:true,
        product
     })
})


// get all products

 const getAllproducts = asyncHandler (
    async (req,res,next) => {

        const resultPerPage = 5;

        const apiFeature = new ApiFeatures(Product.find(),req.query)
        .search()
        .pagination(resultPerPage);

        const products = await apiFeature.query;

        res.status(200).json({
            success:true,
            products,
        });
    })


// get product details

 const getProductDetails = asyncHandler (async (req,res,next) => {
    const product = await Product.findById(req.params.id)
    
    if(!product){
        return next( new ErrorHandler("Product Not Found",404))
    }

    res.status(200).json({
        success:true,
        product
    })
})


// update product -- admin

 const updateProduct = asyncHandler (async (req,res,next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHandler("Product Not Found",404))
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body)

    res.status(200).json({
        success:true,
        product
    })
})


// delete product

 const deleteProduct = asyncHandler (async (req,res,next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next( new ErrorHandler("Product Not Found",404))
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully"
    })

})


export {createProduct,getAllproducts,getProductDetails,updateProduct,deleteProduct}