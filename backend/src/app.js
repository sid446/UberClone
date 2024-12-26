import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import userRouter from "../routes/user.routes.js"
import connectDB from '../db/db.js'
import cookieParser from 'cookie-parser'

dotenv.config();

const app=express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/users',userRouter)




export {app}

