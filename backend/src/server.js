import http from 'http'
import { app } from './app.js'
import connectDB from '../db/db.js';
const port =process.env.PORT || 3000;

const server=http.createServer(app)




connectDB() 
.then(()=>{
    server.listen(port || 3000, ()=>{
        console.log(`Server is running at Port:${port}`);
    })
})
.catch((err)=>{
    console.log("Mongodb CONNECTION FAILED!!",err)
})