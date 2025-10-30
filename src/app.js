import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"

const app = express()

app.use(cors({
    origin: process.env.CORS_0RIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))        //for storing form
app.use(express.urlencoded({extended: true, limit: 
    "16kb"}))       // for storing url

app.use(express.static("public"))         //for storing image and video
app.use(cookieParser())   //for store cookies


export { app }