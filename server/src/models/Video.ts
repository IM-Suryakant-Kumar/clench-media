import { Schema, model } from "mongoose";
import { IVideo } from "../types/Video";

const VideoSchema: Schema = new Schema({
	videoId: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	creator: { type: String, required: true },
	views: { type: String, required: true },
	duration: { type: String, required: true },
	categoryName: { type: String, required: true },
	published: { type: String, required: true },
});

export default model<IVideo>("Video", VideoSchema);
