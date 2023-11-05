import { Request, Response } from "express";
import History from "../models/History";
import { StatusCodes } from "http-status-codes";

export const addToHistory = async (req: Request, res: Response) => {
	await History.create(req.body);
	res.status(StatusCodes.CREATED).json({ success: true, message: "added to history" });
};

export const deleteFromHistory = async (req: Request, res: Response) => {
    await History.findOneAndDelete(req.body);
    res.status(StatusCodes.OK).json({ success: true, message: "Removed from history" })
}
