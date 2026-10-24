
import userModel from '../user/user.model.js'
import AppError from '../../utils/AppError.js'
import { generateToken } from '../../utils/jwt.js';

export const register = async (data) => {
    const {name, email, password, phone} = data 
 
    const existingUser = await userModel.findOne({email})
    if(existingUser){
        throw new AppError("Email exiting arledy",409)
    }

    const user = await userModel.create({
        name,
        email,
        password,
        phone,
    })
    return user;
};

export const login = async (data) => {
    const {email , password} = data

    const existingUser = await userModel.findOne({email})
    if(!existingUser)
        throw new AppError("Invalid email or password",401)

    const isPasswordCorrect = await existingUser.comparePassword(password)
    if(!isPasswordCorrect)
         throw new AppError("Invalid email or password",401)

    const token = generateToken(existingUser._id)
    return {
        user:existingUser,
        token,
    };
}