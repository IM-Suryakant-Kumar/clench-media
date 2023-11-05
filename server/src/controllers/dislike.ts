import { Request, Response } from "express";
import Dislike from "../models/Dislike";
import { StatusCodes } from "http-status-codes";

export const createDislike = async (req: Request, res: Response) => {
    const newReq: any = req;
	await Dislike.create({ userId: newReq.user._id, videoId: req.body.videoId });
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "Successfully dislike the video",
	});
};

export const deleteDislike = async (req: Request, res: Response) => {
    const newReq: any = req;
    await Dislike.findOneAndDelete({ userId: newReq.user._id, videoId: req.params.videoId });
    res.status(StatusCodes.OK).json({ success: true, message: "Successfully removed dislike" })
};
