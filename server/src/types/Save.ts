import { Document } from "mongoose";

export default interface ISave extends Document {
    userId: string;
    videoId: string;
}