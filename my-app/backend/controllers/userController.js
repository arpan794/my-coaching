import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { User } from "../models/userModel.js";
import sendToken from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";

// Register a User

const registerUser = asyncHandler (async (req,res,next) => {
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:"this is a sample id",
            url:"profile pic url",
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
    const user = await User.findOne({ email: req.body.email })

    if(!user){
        return next( new ErrorHandler("User not found",404))
    }

    // Get reset password token
    getResetPasswordToken();

    const resetToken = user.resetPasswordToken();

    await user.save({ validateBeforeSave: false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
    
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then, please ignore it`;

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


export { registerUser,loginUser,logout,forgotPassword }