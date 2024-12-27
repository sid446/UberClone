import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{type:String,required:true,minlength:[3,'First name must be at least 3 characters long']},
        lastname:{type:String,minlength:[3,'Last name must be at least 3 characters long']}   
    },
    email:{type:String,required:true,unique:true,lowercase:true,match:[/\S+@\S+\.\S+/,'Please fill a valid email address']},
    password:{type:String,required:true,select:false,minlength:[6,'Password must be at least 6 characters long']},
    socketId:{type:String},
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
        type:String,
        required:true,
        minlength:[3,'color must be at least 3 characters long']
        },
        plate:{
        type:String,
        required:true,
        unique:true,
        minlength:[3,'plate must be at least 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            minlenght:[1,'capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }

    },
    location:
    {
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
})

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id,email:this.email},process.env.JWT_SECRET,{expiresIn:'1d'});
    return token
};
captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

export const captainModel=mongoose.model('Captain',captainSchema);
