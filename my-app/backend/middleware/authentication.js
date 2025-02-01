import { User } from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";


const isAuthenticationUser = asyncHandler(async (req,res,next) => {
    const token = req.cookies.token;
    console.log(token);
    

   if(!token) {
    return next(new ErrorHandler("please login to access this resourse",401))
   }

   const decodedData = jwt.verify(token,process.env.JWT_SECRET);

   req.user = await User.findById(decodedData.id)
   
   next();
})

const authorizeRoles = (...roles) => {
    return (req,res,next) => {
        if (!roles.includes(req.user.role)) {
            return next (
            new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403)
        )}
        next();
    }
}

export { isAuthenticationUser,authorizeRoles }