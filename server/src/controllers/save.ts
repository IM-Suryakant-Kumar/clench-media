import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Save from "../models/Save";
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

export const createSave = async (req: Request, res: Response) => {
	const {
		body: { videoId },
		user: { _id },
	} = req as IReq;
	await Save.create({ userId: _id, videoId });
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "saved the video",
	});
};

export const deleteFromSave = async (req: Request, res: Response) => {
	const {
		params: { videoId },
		user: { _id },
	} = req as IReq;
	await Save.findOneAndDelete({ userId: _id, videoId });
	res.status(StatusCodes.OK).json({
		success: true,
		message: "unsaved the video",
	});
};

export const getAllSavedVideos = async (req: Request, res: Response) => {
	const {user: { _id }} = req as IReq

    const saves = await Save.find({ userId: _id })
    const videos = await Video.find()

    const savedVideos = saves.map(save => videos.find(v => v.videoId === save.videoId))

    if(!savedVideos) throw new NotFoundError("Videos not found!")

    res.status(StatusCodes.OK).json({ success: true, savedVideos })
};
