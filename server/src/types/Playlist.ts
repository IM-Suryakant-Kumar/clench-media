import { Document } from "mongoose";

interface Playlist {
	name: string;
	videoIds: string[];
}

export default interface IPlaylist extends Document {
	userId: string;
	playlists: Playlist[];
}