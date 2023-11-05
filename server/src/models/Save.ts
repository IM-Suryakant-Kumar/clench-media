import { Schema, model } from "mongoose";
import ISave from "../types/Save";

const SaveSchema: Schema = new Schema({
	userId: { type: String, required: true },
	videoId: { type: String, required: true },
});

export default model<ISave>("Save", SaveSchema);
