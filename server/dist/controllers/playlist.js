"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlaylist = exports.getPlaylistVideos = exports.getAllPlaylist = exports.removeFromPlaylist = exports.addToPlaylist = void 0;
const Playlist_1 = __importDefault(require("../models/Playlist"));
const http_status_codes_1 = require("http-status-codes");
const Video_1 = __importDefault(require("../models/Video"));
const errors_1 = require("../errors");
const addToPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { body: { name, videoId }, user: { _id }, } = req;
    let playlist = yield Playlist_1.default.findOne({ userId: _id });
    const restPlaylists = (playlist === null || playlist === void 0 ? void 0 : playlist.playlists.filter((item) => item.name !== name)) || [];
    const videoIds = ((_a = playlist === null || playlist === void 0 ? void 0 : playlist.playlists.find((item) => item.name === name)) === null || _a === void 0 ? void 0 : _a.videoIds) || [];
    // Add videoId to videoIds
    videoIds.push(videoId);
    if (!playlist)
        playlist = yield Playlist_1.default.create({
            userId: _id,
            playlists: [{ name, videoIds: [videoId] }],
        });
    else
        playlist = yield Playlist_1.default.findOneAndUpdate({ userId: _id }, {
            userId: _id,
            playlists: [...restPlaylists, { name, videoIds }],
        }, { new: true });
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: "added to playlist",
        playlists: playlist === null || playlist === void 0 ? void 0 : playlist.playlists,
    });
});
exports.addToPlaylist = addToPlaylist;
const removeFromPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { body: { name, videoId }, user: { _id }, } = req;
    let playlist = yield Playlist_1.default.findOne({ userId: _id });
    const restPlaylists = (playlist === null || playlist === void 0 ? void 0 : playlist.playlists.filter((item) => item.name !== name)) || [];
    let videoIds = ((_b = playlist === null || playlist === void 0 ? void 0 : playlist.playlists.find((item) => item.name === name)) === null || _b === void 0 ? void 0 : _b.videoIds) || [];
    videoIds = videoIds.filter((item) => item !== videoId);
    playlist = yield Playlist_1.default.findOneAndUpdate({ userId: _id }, { userId: _id, playlists: [...restPlaylists, { name, videoIds }] }, { new: true });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: "removed from playlist",
        playlists: playlist === null || playlist === void 0 ? void 0 : playlist.playlists,
    });
});
exports.removeFromPlaylist = removeFromPlaylist;
const getAllPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, } = req;
    const playlist = yield Playlist_1.default.findOne({ userId: _id });
    const videos = yield Video_1.default.find();
    const allPlaylist = playlist === null || playlist === void 0 ? void 0 : playlist.playlists.map((item) => ({
        name: item.name,
        video: videos.find((v) => v.videoId === item.videoIds[0]),
        numOfVideos: item.videoIds.length,
    }));
    if (!allPlaylist)
        throw new errors_1.NotFoundError("Videos not found!");
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, allPlaylist });
});
exports.getAllPlaylist = getAllPlaylist;
const getPlaylistVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const { user: { _id }, params: { name }, } = req;
    const playlists = yield Playlist_1.default.findOne({ userId: _id });
    const videos = yield Video_1.default.find();
    const playlistVideos = (_c = playlists === null || playlists === void 0 ? void 0 : playlists.playlists.find((p) => p.name === name)) === null || _c === void 0 ? void 0 : _c.videoIds.map((videoId) => videos.find((v) => v.videoId === videoId));
    if (!playlistVideos)
        throw new errors_1.NotFoundError("Videos not found!");
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, playlistVideos });
});
exports.getPlaylistVideos = getPlaylistVideos;
const deletePlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, params: { name }, } = req;
    const playlist = yield Playlist_1.default.findOne({ userId: _id });
    const filteredPlaylists = playlist === null || playlist === void 0 ? void 0 : playlist.playlists.filter((p) => p.name !== name);
    yield Playlist_1.default.findOneAndUpdate({ userId: _id }, { userId: _id, playlists: filteredPlaylists });
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, message: "Deleted from playlists" });
});
exports.deletePlaylist = deletePlaylist;
//# sourceMappingURL=playlist.js.map