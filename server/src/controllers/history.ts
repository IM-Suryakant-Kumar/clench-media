import { Request, Response } from "express";
import History from "../models/History";
import { StatusCodes } from "http-status-codes";

export const addToHistory = async (req: Request, res: Response) => {
	await History.create({ userId: req.user._id, videoId: req.body.videoId });
	res.status(StatusCodes.CREATED).json({ success: true, message: "added to history" });
};

export const deleteFromHistory = async (req: Request, res: Response) => {
	await History.findOneAndDelete({ userId: req.user._id, videoId: req.params.videoId });
	res.status(StatusCodes.OK).json({ success: true, message: "Removed from history" });
};
