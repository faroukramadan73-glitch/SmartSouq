import {register,login} from './auth.service.js'
import sendSuccess from '../../utils/response.js'

export const registerController = async (req , res, next ) => {

    try{
        
        const user = await register(req.body);
        user.password = undefined
      
        return sendSuccess(
            res,
            201,
            user,
            "User registered successfully",
        ) 

    }catch (err){
        next(err)
    }
}

export const loginController = async (req , res, next ) => {
    try{
        const result = await login(req.body)
        result.user.password = undefined
        return sendSuccess(
            res,
            200,
            result,
            "Login successful",
        )
    }catch (err){
        next(err)
    }
}


