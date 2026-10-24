import userModel from './user.model.js';
import AppError from '../../utils/AppError.js';



// GET USER 
export const getUserById = async (userId) => {
    const user = await userModel.findById(userId)

    if(!user){
        throw new AppError("User Not Found" , 404)
    }
    return user;
};

//    UPDATED USER
export const updateUser = async (userId , data) => {
    const user = await userModel.findByIdAndUpdate(
        userId,
        {
            name:data.name,
            email:data.email,
            phone:data.phone
        },
        {
        new:true,
        runValidators:true  
        })

        if(!user){
            throw new AppError("User not found" , 404)
        }
        return user; 
};

   // DELETE USER
export const deleteUser = async (userId) => {
    const user = await userModel.findByIdAndDelete(userId)

    if(!user){
        throw new AppError("User Not Found" , 404)
    }
    
};

//    GET ALL USERS

export const getAllUsers = async () => {
    const user = await userModel.find()

    if(!user){
        throw new AppError("User Not Found" , 404)
    }
    return user;
}
