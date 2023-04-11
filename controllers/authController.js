import User from "../models/User.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError} from '../errors/index.js'
// import { Error } from "mongoose"




const register = async (req, res)=>{
  const {name, email,password}= req.body
  if (!name|| !email|| !password){
    throw new BadRequestError ('Please provide all values')
  }

  const userAlreadyExists = await User.findOne({email})
     if(userAlreadyExists){
      throw new BadRequestError ('Email already in use ')
     }
   
        const user = await User.create({name, email, password})
     
  const token = user.createJWT();
  // attachCookie({ res, token });
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },

    location: user.location,
  });
    
}

  export const login = async (req, res)=>{
    res.send ('login user')
}

export const updateUser = async (req, res)=>{
    res.send ('update user')
 
}


export {register}