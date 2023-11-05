import { Schema, model } from "mongoose";
import IPlaylist from "../types/Playlist";

const PlaylistSchema: Schema = new Schema({
	userId: { type: String, required: true },
	playlists: [
		{
			name: { type: String, required: true },
			videoIds: [{ type: String, required: true }],
		},
	],
});

export default model<IPlaylist>("Playlist", PlaylistSchema);
