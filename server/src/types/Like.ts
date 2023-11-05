import { Document } from "mongoose";

export default interface ILike extends Document {
    userId: string;
	videoId: string;
}
