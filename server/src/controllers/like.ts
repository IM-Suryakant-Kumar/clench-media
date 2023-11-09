import { Request, Response } from "express";
import Like from "../models/Like";
import { StatusCodes } from "http-status-codes";
import Video from "../models/Video";
import { NotFoundError } from "../errors";

interface IReq extends Request {
	body: {
		videoId?: string;
	};
	params: {
		videoId?: string;
	};
	user: {
		_id: string;
	};
}

export const createLike = async (req: Request, res: Response) => {
	const {
		body: { videoId },
		user: { _id },
	} = req as IReq;
	await Like.create({ userId: _id, videoId });
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "successfully likes the video",
	});
};

export const deleteLike = async (req: Request, res: Response) => {
	const {
		params: { videoId },
		user: { _id },
	} = req as IReq;

	await Like.findOneAndDelete({ userId: _id, videoId });
	res.status(StatusCodes.OK).json({ success: true, message: "Successfully dislike the video" });
};

export const getAllLikedVideos = async (req: Request, res: Response) => {
    const {user: { _id }} = req as IReq

    const likes = await Like.find({ userId: _id })
    const videos = await Video.find()

    const likedVideos = likes.map(like => videos.find(v => v.videoId === like.videoId))
    
    if(!likedVideos) throw new NotFoundError("Videos not found!")

    res.status(StatusCodes.OK).json({ success: true, likedVideos })
};
