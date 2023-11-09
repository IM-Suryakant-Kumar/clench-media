import { Request, Response } from "express";
import Video from "../models/Video";
import { StatusCodes } from "http-status-codes";
import Like from "../models/Like";
import Dislike from "../models/Dislike";
import Save from "../models/Save";
import History from "../models/History";
import Playlist from "../models/Playlist";
import { IVideo } from "../types/Video";

interface IReq extends Request {
	body: IVideo[] | IVideo;
	params: { id: string };
	user: { _id: string };
}

export const addVideo = async (req: Request, res: Response) => {
	const { body } = req as IReq;
	const videos = await Video.create(body);
	res.status(StatusCodes.OK).json({ success: true, videos });
};

export const getVideos = async (req: Request, res: Response) => {
	const videos = await Video.find();
	res.status(StatusCodes.OK).json({ success: true, videos });
};

export const getVideoDetails = async (req: Request, res: Response) => {
	const {
		params: { id },
		user: { _id },
	} = req as IReq;
	// Add to history
	const isAlreadyExists: boolean = Boolean(
		await History.findOne({
			userId: _id,
			videoId: id,
		}),
	);
	isAlreadyExists
		? await History.findOneAndUpdate({ userId: _id, videoId: id }, { userId: _id, videoId: id })
		: await History.create({ userId: _id, videoId: id });
	// --------------
	const videos = await Video.find();
	const video = videos.find((video) => video.videoId === id);
	const relatedVideos = videos.filter(
		(item) => item.categoryName === video?.categoryName && item.videoId !== id,
	);
	// Actions
	const isLiked = await Like.findOne({ userId: _id, videoId: id });
	const isDisliked = await Dislike.findOne({
		userId: _id,
		videoId: id,
	});
	const isSaved = await Save.findOne({ userId: _id, videoId: id });
	const playlists = (await Playlist.findOne({ userId: _id }))?.playlists;
	// const isInPlaylist = playlist?.playlists.find((item) => {
	// 	return Boolean(item.videoIds.find((id) => id === newReq.params.id));
	// });

	res.status(StatusCodes.OK).json({
		success: true,
		videoDetails: {
			video,
			relatedVideos,
			actions: {
				isLiked: Boolean(isLiked),
				isDisliked: Boolean(isDisliked),
				isSaved: Boolean(isSaved),
				playlists,
			},
		},
	});
};

export const getCategories = async (req: Request, res: Response) => {
	const videos = await Video.find();
	const categories: String[] = [];
	videos.forEach((video) => {
		if (!categories.includes(video.categoryName)) categories.push(video.categoryName);
	});
	res.status(StatusCodes.OK).json({ success: true, categories });
};
