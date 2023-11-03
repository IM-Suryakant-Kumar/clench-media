import { config } from "dotenv";
import mongoose from "mongoose";
import express, { Application } from "express";
import Video from "./models/Video";
import videos from "./videos";

config()

const app: Application = express()
const url = process.env.MONGO_URL || "" 

const start = async () => {
    try {
        await mongoose.connect(url)
        app.listen(4000, () => console.log(`Server is listening on Port 4000...`))
        await Video.deleteMany()
        await Video.create(videos)
        process.exit()
    } catch (error) {
        console.log(error)
    }
    
}

start()