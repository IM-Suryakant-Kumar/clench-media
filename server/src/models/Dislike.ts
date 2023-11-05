import { Schema, model } from "mongoose";
import IDislike from "../types/DisLike";

const DislikeSchema: Schema = new Schema({
	userId: { type: String, required: true },
	videoId: { type: String, required: true },
});

export default model<IDislike>("Dislike", DislikeSchema);
