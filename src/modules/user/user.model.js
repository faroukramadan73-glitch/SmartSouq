import mongoose from "mongoose";
import USER_ROLES from "../../enums/userRole.enum.js";

const userModel = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim:true,
        minlenght:3,
        maxlenght:80
    },
    email:{
         type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
           type:String,
        required:true,
        minlenght:8
    },
    phone:{
           type:String,
           unique:true,
           minlenght:12
    },
    role:{
        type:String,
        enum: Object.values(USER_ROLES),
        default:"customer"
    }
},
{
    timestamps:true
});

const user = mongoose.model("User",userModel)

export default user