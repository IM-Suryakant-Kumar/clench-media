import { Document } from "mongoose";

export default interface IDislike extends Document {
    userId: string;
    videoId: string;
}