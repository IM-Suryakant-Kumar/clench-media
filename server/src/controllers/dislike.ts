import { Request, Response } from "express";
import Dislike from "../models/Dislike";
import { StatusCodes } from "http-status-codes";

export const createDislike = async (req: Request, res: Response) => {
	await Dislike.create(req.body);
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "Successfully dislike the video",
	});
};

export const deleteDislike = async (req: Request, res: Response) => {
    await Dislike.findOneAndDelete(req.body);
    res.status(StatusCodes.OK).json({ success: true, message: "Successfully removed dislike" })
};
