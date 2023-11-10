"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const like_1 = require("../controllers/like");
const router = (0, express_1.Router)();
router.route("/like").post(like_1.createLike).get(like_1.getAllLikedVideos);
router.route("/like/:videoId").delete(like_1.deleteLike);
exports.default = router;
//# sourceMappingURL=like.js.map