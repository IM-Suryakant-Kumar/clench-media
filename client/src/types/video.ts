export default interface IVideo {
	videoId: string;
	title: string;
	description: string;
	creator: string;
	views: string;
	duration: string;
	categoryName: string;
	published: string;
}

export interface IActions {
	isLiked: boolean;
	isDisliked: boolean;
	isSaved: boolean;
	isInPlaylist: boolean;
}

export interface IVideoDetails {
	video: IVideo;
	relatedVideos: IVideo[];
	actions: IActions;
}
