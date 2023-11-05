import { Request, Response } from "express";
import Video from "../models/Video";
import { StatusCodes } from "http-status-codes";
import Like from "../models/Like";
import Dislike from "../models/Dislike";
import Save from "../models/Save";
import History from "../models/History";
import Playlist from "../models/Playlist";

export const addVideo = async (req: Request, res: Response) => {
	const videos = await Video.create(req.body);
	res.status(StatusCodes.OK).json({ success: true, videos });
};

export const getVideos = async (req: Request, res: Response) => {
	const videos = await Video.find();
	res.status(StatusCodes.OK).json({ success: true, videos });
};

export const getVideoDetails = async (req: Request, res: Response) => {
	const newReq: any = req;
	await History.create({ userId: newReq.user._id, videoId: newReq.params.id });
	const videos = await Video.find();
	const video = videos.find((video) => video.videoId === newReq.params.id);
	const relatedVideos = videos.filter(
		(item) => item.categoryName === video?.categoryName && item.videoId !== newReq.params.id,
	);
	// Actions
	const isLiked = await Like.findOne({ userId: newReq.user._id, videoId: newReq.params.id });
	const isDisliked = await Dislike.findOne({
		userId: newReq.user._id,
		videoId: newReq.params.id,
	});
	const isSaved = await Save.findOne({ userId: newReq.user._id, videoId: newReq.params.id });
	const playlist = await Playlist.findOne({ userId: newReq.user._id });
	const isInPlaylist = playlist?.playlists.find((item) => {
		return Boolean(item.videoIds.find((id) => id === newReq.params.id));
	});

	res.status(StatusCodes.OK).json({
		success: true,
		videoDetails: {
			video,
			relatedVideos,
			actions: {
				isLiked: Boolean(isLiked),
				isDisliked: Boolean(isDisliked),
				isSaved: Boolean(isSaved),
				isInPlaylist: Boolean(isInPlaylist),
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
