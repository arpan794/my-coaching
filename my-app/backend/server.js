import app from "./app.js";
import dotenv, { config } from "dotenv";
import connectDB from "./config/database.js";

// Handlimg Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1)    
})

// config

dotenv.config({path:"backend/config/config.env"});

// connecting to database

connectDB();




const server = app.listen(process.env.PORT,() => {
    console.log(`Server is running at Port: http://localhost:${process.env.PORT}`);

})


// unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");

    server.close(() => {
        process.exit(1)
    })
    
})