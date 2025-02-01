import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:[true,"Please Enter product Name"],
        trim:true,
    },
    images:[{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    }],
    description:{
        type:String,
        required:[true,"Please Enter product Description"],
    },
    content:{
        type:String,
        required:[true,"Please Enter product content"],
    },
    instructor:[{
        images:[{
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }],
        name:{
            type:String,
            required:[true,"Please Enter intructor Name"],
            trim:true,
        }, 
        expertise:{
            type:String,
            required:[true,"Please Enter instructor expertise"],
        }, 
        description:{
            type:String,
            required:[true,"Please Enter instructor description"],
        }, 
        batches:{
            type:String,
            required:[true,"Please Enter instructor batches"],
        } 
        
    }],
    price:{
        type:Number,
        required:[true,"Please Enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"],
    },
    ratings:{
        type:Number,
        default:0,
    },
    
    numofReviews:{
        type:Number,
        default:0,
    },
    reviews:[{
        user:{
            type: mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
        }
    }],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    }
},   
    {
        timestamps:true
    }   
);


export const Product = mongoose.model("Product", productSchema)