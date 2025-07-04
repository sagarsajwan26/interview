import express from 'express'
import 'dotenv/config'
import { connectMongoDB } from './db/mongodb.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.router.js'
import adminRoute from './routes/admin.router.js'


const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    methods:['POST','PATCH','PUT','DELETE']
})),




app.use('/api/v1/admin',adminRoute)
app.use('/api/v1/user',userRoute)


connectMongoDB().then(()=>{
app.listen(port,()=>{
    console.log(`server is successfully connected at http://localhost:3000`);
    
})
}).catch(err=>{
    console.log('ERROR IN SERVER.JS WHILE CONNECTING TO MONGO DB');
    
})
