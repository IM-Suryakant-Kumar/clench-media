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
exports.deleteDislike = exports.createDislike = void 0;
const Dislike_1 = __importDefault(require("../models/Dislike"));
const http_status_codes_1 = require("http-status-codes");
const createDislike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReq = req;
    yield Dislike_1.default.create({ userId: newReq.user._id, videoId: req.body.videoId });
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        success: true,
        message: "Successfully dislike the video",
    });
});
exports.createDislike = createDislike;
const deleteDislike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReq = req;
    yield Dislike_1.default.findOneAndDelete({ userId: newReq.user._id, videoId: req.params.videoId });
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, message: "Successfully removed dislike" });
});
exports.deleteDislike = deleteDislike;
//# sourceMappingURL=dislike.js.map