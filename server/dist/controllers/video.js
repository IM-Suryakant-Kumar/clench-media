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
exports.getCategories = exports.getVideoDetails = exports.getVideos = exports.addVideo = void 0;
const Video_1 = __importDefault(require("../models/Video"));
const http_status_codes_1 = require("http-status-codes");
const Like_1 = __importDefault(require("../models/Like"));
const Dislike_1 = __importDefault(require("../models/Dislike"));
const Save_1 = __importDefault(require("../models/Save"));
const History_1 = __importDefault(require("../models/History"));
const Playlist_1 = __importDefault(require("../models/Playlist"));
const addVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const videos = yield Video_1.default.create(body);
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, videos });
});
exports.addVideo = addVideo;
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videos = yield Video_1.default.find();
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, videos });
});
exports.getVideos = getVideos;
const getVideoDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { params: { id }, user: { _id }, } = req;
    // Add to history
    const isAlreadyExists = Boolean(yield History_1.default.findOne({
        userId: _id,
        videoId: id,
    }));
    isAlreadyExists
        ? yield History_1.default.findOneAndUpdate({ userId: _id, videoId: id }, { userId: _id, videoId: id })
        : yield History_1.default.create({ userId: _id, videoId: id });
    // --------------
    const videos = yield Video_1.default.find();
    const video = videos.find((video) => video.videoId === id);
    const relatedVideos = videos.filter((item) => item.categoryName === (video === null || video === void 0 ? void 0 : video.categoryName) && item.videoId !== id);
    // Actions
    const isLiked = yield Like_1.default.findOne({ userId: _id, videoId: id });
    const isDisliked = yield Dislike_1.default.findOne({
        userId: _id,
        videoId: id,
    });
    const isSaved = yield Save_1.default.findOne({ userId: _id, videoId: id });
    const playlists = (_a = (yield Playlist_1.default.findOne({ userId: _id }))) === null || _a === void 0 ? void 0 : _a.playlists;
    // const isInPlaylist = playlist?.playlists.find((item) => {
    // 	return Boolean(item.videoIds.find((id) => id === newReq.params.id));
    // });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        videoDetails: {
            video,
            relatedVideos,
            actions: {
                isLiked: Boolean(isLiked),
                isDisliked: Boolean(isDisliked),
                isSaved: Boolean(isSaved),
                playlists,
            },
        },
    });
});
exports.getVideoDetails = getVideoDetails;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videos = yield Video_1.default.find();
    const categories = [];
    videos.forEach((video) => {
        if (!categories.includes(video.categoryName))
            categories.push(video.categoryName);
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, categories });
});
exports.getCategories = getCategories;
//# sourceMappingURL=video.js.map