import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Save from "../models/Save";

export const createSave = async (req: Request, res: Response) => {
	await Save.create(req.body);
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "successfully save the video",
	});
};

export const deleteFromSave = async (req: Request, res: Response) => {
	await Save.findOneAndDelete(req.body);
	res.status(StatusCodes.OK).json({
		success: true,
		message: "Successfully removed from save",
	});
};
