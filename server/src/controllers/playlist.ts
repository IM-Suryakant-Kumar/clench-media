import { Request, Response } from "express";
import Playlist from "../models/Playlist";
import { StatusCodes } from "http-status-codes";

export const addToPlaylist = async (req: Request, res: Response) => {
    const newReq: any = req;
	const { name, videoId } = newReq.body;
	const user = newReq.user;
	const playlist = await Playlist.findOne({ userId: user._id });

	const restPlaylists = playlist?.playlists.filter((item) => item.name !== name) || [];
	const videoIds: string[] =
		playlist?.playlists.find((item) => item.name === name)?.videoIds || [];

	if (!playlist)
		await Playlist.create({ userId: user._Id, playlists: [{ name, videoIds: [videoId] }] });
	else
		await Playlist.findOneAndUpdate(
			{ userId: user._id },
			{
				userId: user._id,
				playlists: [...restPlaylists, { name, videoIds }],
			},
		);
	res.status(StatusCodes.CREATED).json({ success: true, message: "added to playlist" });
};

export const removeFromPlaylist = async (req: Request, res: Response) => {
    const newReq: any = req;
	const { name, videoId } = newReq.body;
	const user = newReq.user;
	const playlist = await Playlist.findOne({ userId: user._id });

	const restPlaylists = playlist?.playlists.filter((item) => item.name !== name) || [];
	let videoIds: string[] = playlist?.playlists.find((item) => item.name === name)?.videoIds || [];
	videoIds = videoIds.filter((item) => item !== videoId);

	await Playlist.findOneAndUpdate(
		{ userId: user._id },
		{ userId: user._id, playlists: [...restPlaylists, { name, videoIds }] },
	);

	res.status(StatusCodes.OK).json({ success: true, message: "removed from playlist" });
};
