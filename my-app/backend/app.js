import express from "express";
import product from "./routes/productRoute.js"
import apiErrorHandler from "./middleware/errorMiddleware.js";
import user from "./routes/userRoute.js";
import cookieParser from "cookie-parser";



const app = express();

app.use(express.json());
app.use(cookieParser());


// Route Imports

app.use("/api/v1",product)
app.use("/api/v1",user)


// middleware for error

app.use(apiErrorHandler)


export default app