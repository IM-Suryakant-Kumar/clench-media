import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Save from "../models/Save";

export const createSave = async (req: Request, res: Response) => {
	await Save.create({ userId: req.user._id, videoId: req.body.videoId });
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "saved the video",
	});
};

export const deleteFromSave = async (req: Request, res: Response) => {
	await Save.findOneAndDelete({ userId: req.user._id, videoId: req.params.videoId });
	res.status(StatusCodes.OK).json({
		success: true,
		message: "unsaved the video",
	});
};
