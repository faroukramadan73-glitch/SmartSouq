import mongoose from "mongoose";
import USER_ROLES from "../../enums/userRole.enum.js";
import bcrypt from "bcryptjs";

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
        minlength:8
    },
    phone:{
           type:String,
           unique:true,
           minlength:11
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


userModel.pre("save" , async function () {
    this.password = await bcrypt.hash(this.password,10)   
});

userModel.methods.comparePassword =  async function (password) {
   return await bcrypt.compare(password , this.password)
};

const user = mongoose.model("User",userModel)

export default user