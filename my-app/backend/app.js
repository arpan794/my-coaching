import express from "express";
import product from "./routes/productRoute.js"
import apiErrorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json())

// Route Imports

app.use("/api/v1",product)

// middleware for error

app.use(apiErrorHandler)


export default app