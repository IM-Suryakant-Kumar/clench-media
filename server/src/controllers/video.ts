import { Request, Response } from "express";
import Video from "../models/Video";
import { StatusCodes } from "http-status-codes";
import { IVideo } from "../types/Video";

export const addVideo = async (req: Request, res: Response) => {
	const videos = await Video.create(req.body);
	res.status(StatusCodes.OK).json({ success: true, videos });
};

export const getVideos = async (req: Request, res: Response) => {
	const videos = await Video.find();
	res.status(StatusCodes.OK).json({ success: true, videos });
};

export const getVideoDetails = async (req: Request, res: Response) => {
	const videos = await Video.find();
	const video = videos.find((video) => video.videoId === req.params.id);
	const relatedVideos = videos.filter((item) => item.categoryName === video?.categoryName);
	res.status(StatusCodes.OK).json({ success: true, videoDetails: { video, relatedVideos } });
};

export const getCategories = async (req: Request, res: Response) => {
	const videos = await Video.find();
	const categories: String[] = [];
	videos.forEach((video) => categories.push(video.categoryName));
	res.status(StatusCodes.OK).json({ success: true, categories });
};

export const getSearchedVideos = async (req: Request, res: Response) => {
	const { searchText } = req.body;
	const videos = await Video.find();
	const searchedVideos: IVideo[] = [];
	videos.forEach((video) => video.title.includes(searchText) && searchedVideos.push(video));
	res.status(StatusCodes.OK).json({ success: true, videos: searchedVideos });
};

export const getFilteredVideos = async (req: Request, res: Response) => {
	const { categoryName } = req.body;
	const videos = await Video.find();
	const filteredVideos: IVideo[] = videos.filter((video) => video.categoryName === categoryName);
	res.status(StatusCodes.OK).json({ success: true, videos: filteredVideos });
};
