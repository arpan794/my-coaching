import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { User } from "../models/userModel.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
import cloudinary from "cloudinary";

// Register a User

const registerUser = asyncHandler (async (req,res,next) => {
    
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder: "avatars",
        width: 150,
        crop: "scale",
    });
    
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });

    sendToken(user,201,res);

})

// Login User
const loginUser = asyncHandler(async (req,res,next) => {
    const { email,password } = req.body

    // checking if user has given password and email both

    if(!email || !password) {
        return next( new ErrorHandler ("Please enter email and password",400));
    }

    const user = await User.findOne( {email} ).select("+password");

    if(!user){
        return next( new ErrorHandler("Invalid email and password",401))
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next( new ErrorHandler("Invalid email and password",401))
    }
    
    sendToken(user,200,res);
  
})

// Logout user
const logout = asyncHandler (async (req,res,next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success:true,
        message: "Logged Out",
    })
})

// Forgot password
const forgotPassword = asyncHandler( async (req,res,next) => {
    const user = await User.findOne( {Email:req.body.email} )
    console.log(user);
    

    if(!user){
        return next( new ErrorHandler("User not found",404))
    }

    // Get reset password token.............................this code is not working 

    const resetToken =  await user.getResetPasswordToken();
    console.log(resetToken);
    

    await user.save({ validateBeforeSave: false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
    console.log(resetPasswordUrl);
    

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then, please ignore it`;
    console.log(message);
    
    try {
        
        await sendEmail({
             email: user.email,
             subject: `My-Coach Password Recovery`,
             message,
        });

        res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false});

        return next(new ErrorHandler(error.message, 500))
    }
});

// Reset Password
const resetPassword = asyncHandler(async () => {
    
    // creating token hash
    const resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    })

    if(!user){
        return next( new ErrorHandler("Reset Password Token is invalid or has been expired",400))
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match password",400))
    } 

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    
    await user.save();

    sendToken(user,200,res);
})

// Get user details
const getUserDetails = asyncHandler(async (req,res,next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// Update User Password
const updatePassword = asyncHandler(async (req,res,next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next( new ErrorHandler("Old password is incorrect",400))
    }

    if(req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match",400));
    } 

    user.password = req.body.newPassword;

    await user.save();
    
    sendToken(user,200,res)

    });

// Update User Profile
const updateProfile = asyncHandler(async (req,res,next) => {
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }

    // we will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id, newUserData)

    res.status(200).json({
        success: true,
    });

});

// Get All user (admin)
 const getAllUser = asyncHandler(async (req,res,next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
 })

// Get single user (admin)
 const getSingleUser = asyncHandler(async (req,res,next) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return next( new ErrorHandler(`User does not exist with Id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user,
    });
 })

 // Update User role (admin)
const updateUserRole = asyncHandler(async (req,res,next) => {
    
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData)

    if(!user){
        return next( new ErrorHandler(`User does not exist with Id: ${req.params.id} can not update`))
    }

    res.status(200).json({
        success: true,
    });

});

 // Delete User (admin)
const deleteUser = asyncHandler(async (req,res,next) => {
    
    const user = await User.findById(req.params.id);

    // we will remove cloudinary later

    if(!user){
        return next( new ErrorHandler(`User does not exist with Id: ${req.params.id}`))
    }

    await user.deleteOne();

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });

});


export { registerUser,loginUser,logout,forgotPassword,resetPassword,getUserDetails,updatePassword,updateProfile,getAllUser,getSingleUser,updateUserRole,deleteUser }