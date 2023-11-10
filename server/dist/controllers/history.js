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
exports.getAllHistoryVideos = exports.deleteFromHistory = exports.addToHistory = void 0;
const History_1 = __importDefault(require("../models/History"));
const http_status_codes_1 = require("http-status-codes");
const Video_1 = __importDefault(require("../models/Video"));
const errors_1 = require("../errors");
const addToHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { videoId }, user: { _id }, } = req;
    yield History_1.default.create({ userId: _id, videoId });
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ success: true, message: "added to history" });
});
exports.addToHistory = addToHistory;
const deleteFromHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { videoId }, user: { _id }, } = req;
    yield History_1.default.findOneAndDelete({ userId: _id, videoId });
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, message: "Removed from history" });
});
exports.deleteFromHistory = deleteFromHistory;
const getAllHistoryVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { _id }, } = req;
    const histories = yield History_1.default.find({ userId: _id });
    const videos = yield Video_1.default.find();
    const historyVideos = histories.map((history) => videos.find((v) => v.videoId === history.videoId));
    if (!historyVideos)
        throw new errors_1.NotFoundError("Videos not found!");
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, historyVideos });
});
exports.getAllHistoryVideos = getAllHistoryVideos;
//# sourceMappingURL=history.js.map