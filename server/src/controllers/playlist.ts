import { Request, Response } from "express";
import Playlist from "../models/Playlist";
import { StatusCodes } from "http-status-codes";
import Video from "../models/Video";

interface IBody {
	name?: string;
	videoId?: string;
}

interface IUser {
	_id: string;
}

interface IReq extends Request {
	body: IBody;
	user: IUser;
}

export const addToPlaylist = async (req: Request, res: Response) => {
	const {
		body: { name, videoId },
		user: { _id },
	} = req as IReq;

	let playlist = await Playlist.findOne({ userId: _id });

	const restPlaylists = playlist?.playlists.filter((item) => item.name !== name) || [];
	const videoIds: string[] =
		playlist?.playlists.find((item) => item.name === name)?.videoIds || [];
	// Add videoId to videoIds
	videoIds.push(videoId as string);

	if (!playlist)
		playlist = await Playlist.create({
			userId: _id,
			playlists: [{ name, videoIds: [videoId] }],
		});
	else
		playlist = await Playlist.findOneAndUpdate(
			{ userId: _id },
			{
				userId: _id,
				playlists: [...restPlaylists, { name, videoIds }],
			},
			{ new: true },
		);
	res.status(StatusCodes.CREATED).json({
		success: true,
		message: "added to playlist",
		playlists: playlist?.playlists,
	});
};

export const removeFromPlaylist = async (req: Request, res: Response) => {
	const {
		body: { name, videoId },
		user: { _id },
	} = req as IReq;

	let playlist = await Playlist.findOne({ userId: _id });

	const restPlaylists = playlist?.playlists.filter((item) => item.name !== name) || [];
	let videoIds: string[] = playlist?.playlists.find((item) => item.name === name)?.videoIds || [];
	videoIds = videoIds.filter((item) => item !== videoId);

	playlist = await Playlist.findOneAndUpdate(
		{ userId: _id },
		{ userId: _id, playlists: [...restPlaylists, { name, videoIds }] },
		{ new: true },
	);

	res.status(StatusCodes.OK).json({
		success: true,
		message: "removed from playlist",
		playlists: playlist?.playlists,
	});
};

export const getAllPlaylist = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;

	const playlist = await Playlist.findOne({ userId: _id });
	const videos = await Video.find();

	const allPlaylist = playlist?.playlists.map((item) => ({
		name: item.name,
		videos: item.videoIds.map((videoId) => videos.find((v) => v.videoId === videoId)),
	}));

	res.status(StatusCodes.OK).json({ success: true, allPlaylist });
};
