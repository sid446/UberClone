import { hash } from "bcrypt";
import { captainModel } from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

const registerCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const {fullname,email,password,vehicle}=req.body;
    const isCaptain=await captainModel.findOne({email});
    if(isCaptain)
    {
        return res.status(400).json({message:'Captain already exists'})
    }
    const hashedPassword=await captainModel.hashPassword(password);
    const captain =await createCaptain({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hashedPassword,color:vehicle.color,plate:vehicle.plate,capacity:vehicle.capacity,vehicleType:vehicle.vehicleType})
    const token=captain.generateAuthToken()
    res.status(201).json({token,captain})
}



export {registerCaptain}