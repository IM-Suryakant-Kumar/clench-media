import { Request, Response } from "express";
import History from "../models/History";
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

export const addToHistory = async (req: Request, res: Response) => {
	const {
		body: { videoId },
		user: { _id },
	} = req as IReq;
	await History.create({ userId: _id, videoId });
	res.status(StatusCodes.CREATED).json({ success: true, message: "added to history" });
};

export const deleteFromHistory = async (req: Request, res: Response) => {
	const {
		params: { videoId },
		user: { _id },
	} = req as IReq;
	await History.findOneAndDelete({ userId: _id, videoId });
	res.status(StatusCodes.OK).json({ success: true, message: "Removed from history" });
};

export const getAllHistoryVideos = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;

	const histories = await History.find({ userId: _id });
	const videos = await Video.find();

	const historyVideos = histories.map((history) =>
		videos.find((v) => v.videoId === history.videoId),
	);

    if(!historyVideos) throw new NotFoundError("Videos not found!")

	res.status(StatusCodes.OK).json({ success: true, historyVideos });
};
