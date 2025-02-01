import ErrorHandler from "../utils/errorHandler.js";

const apiErrorHandler = (err,req,res,next) => {
     err.statuscode = err.statuscode || 500;
     err.message = err.message || "Internal Server Error";
     
     // wrong mongodb id error
     if(err.name === "CastError"){
      const message = `Resourse not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message,400)
     }

     // Mongoose duplicate key error
     if(err.code === 11000) {
      const message = `Json web token is invalid, try again`;
      err = new ErrorHandler(err,400);
     }

     // Wrong JWT error
     if(err.name === "JsonWebTokenError") {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
      err = new ErrorHandler(message,400);
     }

     //  JWT EXPIRE error
     if(err.name === "TokenExpiredError") {
      const message = `Json web token is expired, try again`;
      err = new ErrorHandler(message,400);
     }
     

     res.status(err.statuscode).json({
        success:false,
        message:err.message,
     })
}

export default apiErrorHandler;