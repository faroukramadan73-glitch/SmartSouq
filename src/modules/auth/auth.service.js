
import userModel from '../user/user.model.js'

export const Register = async (data) => {
    const {email ,password } = data 

    const existingUser = await userModel.findOne({email})
    if(existingUser){
        throw new Error ("Email already exists ")
    }


}