import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import test from "./controller/test.js"
dotenv.config()
const app=express()
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use("/",test)
app.listen(process.env.PORT,()=> console.log("Server Started at PORT: ",process.env.PORT))