import { Document } from "mongoose"

export default interface IHistory extends Document {
    userId: string;
    videoId: string;
}