import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least of 3 character long'],

        },
        lastname:
            {
                type:String,
                minlength:[3,'Last name must be at least of 3 character long'],

            }

  },
  email:{
    type:String,
    required:true,
    unique:true,
    minlengh:[5,"Email must be of 5 character long"]
  },
  password:{
    type:String,
    required:true,
    select:false//jab hum user ko find karenge toh ye as a response me nahi jayega
  },
  socketId:{
    type:String
  },

})


userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({id:this._id},process.env.JWT_SECRET)
    return token;
}
userSchema.method.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)

}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

export const userModel=mongoose.model('userModel',userSchema)
