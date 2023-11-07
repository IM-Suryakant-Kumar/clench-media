export interface IPlaylist {
	name: string;
	videoIds: string[];
}

export default interface IPlaylists {
    playlists: IPlaylist[]
}