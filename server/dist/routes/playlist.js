"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlist_1 = require("../controllers/playlist");
const router = (0, express_1.Router)();
router.route("/playlist").post(playlist_1.addToPlaylist).put(playlist_1.removeFromPlaylist).get(playlist_1.getAllPlaylist);
router.route("/playlist/:name").get(playlist_1.getPlaylistVideos).patch(playlist_1.deletePlaylist);
exports.default = router;
//# sourceMappingURL=playlist.js.map