import mongoose from "mongoose"
 
   

const connectDB = async () => {
  
        const connectionInstance = await mongoose.connect(process.env.DB_URI);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
      
}


export default connectDB