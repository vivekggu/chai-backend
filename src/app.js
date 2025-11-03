import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_0RIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))        //for storing form
app.use(express.urlencoded({extended: true, limit: 
    "16kb"}))       // for storing url

app.use(express.static("public"))         //for storing image and video
app.use(cookieParser())   //for access and set cookies



//routes import
import userRouter from './routes/user.routes.js'


//routes declaration 
app.use("/api/v1/users", userRouter)


// http://localhost: 8000/api/v1/users/register 

export { app }