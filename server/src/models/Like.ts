import { Schema, model } from "mongoose";
import ILike from "../types/Like";

const LikeSchema: Schema = new Schema({
	userId: { type: String, required: true },
	videoId: { type: String, required: true },
});

export default model<ILike>("Like", LikeSchema);
