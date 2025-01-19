import ErrorHandler from "../utils/errorHandler.js";

const apiErrorHandler = (err,req,res,next) => {
     err.statuscode = err.statuscode || 500;
     err.message = err.message || "Internal Server Error";
     
     // wrong mongodb id error
     if(err.name === "CastError"){
      const message = `Resourse not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message,400)
     }



     res.status(err.statuscode).json({
        success:false,
        message:err.message,
     })
}

export default apiErrorHandler;