import { userModel } from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

const registerUser=async(req,res,next)=>{

    const errors=validationResult(req);//express validator jo cheej check kar raha hai usme jo bhi error ka message hoga vo yaha aa jayega
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const {fullname,email,password}=req.body;
    const hashedPassword=await userModel.hashPassword(password);
    const user =await createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashedPassword})
    const token=user.generateAuthToken()
    res.status(201).json({token,user})





}


export {registerUser}