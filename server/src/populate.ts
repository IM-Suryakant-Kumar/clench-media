import { config } from "dotenv";
import connectDB from "./db";
import Video from "./models/Video";
import videos from "./videos";
config()


const url = process.env.MONGO_URL || "" 

const start = async () => {
    try {
        await connectDB(url)
        await Video.deleteMany()
        await Video.create(videos)
        console.log("success!")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    
}

start()