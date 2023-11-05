import { Schema, model } from "mongoose";
import IHistory from "../types/History";

const HistorySchema: Schema = new Schema({
	userId: { type: String, required: true },
	videoId: { type: String, required: true },
});

export default model<IHistory>("History", HistorySchema);
