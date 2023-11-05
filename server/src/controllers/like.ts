import { Request, Response } from "express";
import Like from "../models/Like";
import { StatusCodes } from "http-status-codes";

export const createLike = async (req: Request, res: Response) => {
	const newReq: any = req;
	await Like.create({ userId: newReq.user._id, videoId: req.body.videoId });
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "successfully likes the video",
	});
};

export const deleteLike = async (req: Request, res: Response) => {
	const newReq: any = req;
	await Like.findOneAndDelete({ userId: newReq.user._id, videoId: req.params.videoId });
	res.status(StatusCodes.OK).json({ success: true, message: "Successfully dislike the video" });
};
