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

        const resultPerPage = 6;

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

// Create new review or update the review

 const createProductReview = asyncHandler(async (req,res,next) => {
    const {rating,comment,productId} = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if(isReviewed){
      product.reviews.forEach((rev) => {
        if(rev.user.toString() === req.user._id.toString()){
            (rev.rating = rating), (rev.comment = comment)
        }
      }) ;      
    }
    else{
        product.reviews.push(review);
        product.numofReviews = product.reviews.length
    }

    let avg=0;

    product.reviews.forEach(rev => {
        avg+=rev.rating;
    })

    product.ratings =  avg/product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
 });

 // Get all reviews of a product
  const getProductReviews = asyncHandler(async (req,res,next) => {
    const product = await Product.findById(req.query.id);

    if(!product){
        return next( new ErrorHandler("Product Not Found",404))
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
  })

 // Delete reviews
  const deleteReviews = asyncHandler(async (req,res,next) => {
    const product = await Product.findById(req.query.productId);

    if(!product){
        return next( new ErrorHandler("Product Not Found",404))
    }

    const reviews = product.reviews.filter( rev=> rev._id.toString() !== req.query.id.toString());

    let avg=0;

    reviews.forEach(rev => {
        avg+=rev.rating;
    })

    const ratings =  avg/ reviews.length;

    const numofReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numofReviews,
    })

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
  })


export { createProduct,getAllproducts,getProductDetails,updateProduct,deleteProduct,createProductReview,getProductReviews,deleteReviews }