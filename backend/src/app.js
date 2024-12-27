import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import userRouter from "../routes/user.routes.js"
import cookieParser from 'cookie-parser'
import CaptainRouter from '../routes/captian.routes.js'

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
app.use('/captains',CaptainRouter)





export {app}

