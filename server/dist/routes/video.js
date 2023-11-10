"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const video_1 = require("../controllers/video");
const authentication_1 = require("../middlewares/authentication");
const router = (0, express_1.Router)();
router.route("/videos").post(authentication_1.authenticateUser, video_1.addVideo).get(video_1.getVideos);
router.route("/videos/:id").get(authentication_1.authenticateUser, video_1.getVideoDetails);
router.route("/categories").get(video_1.getCategories);
exports.default = router;
//# sourceMappingURL=video.js.map