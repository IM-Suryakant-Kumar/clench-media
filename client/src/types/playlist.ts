export interface IPlaylist {
	name: string;
	videoIds: string[];
}

export interface IPlaylists {
    playlists: IPlaylist[]
}