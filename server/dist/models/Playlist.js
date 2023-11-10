"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlaylistSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    playlists: [
        {
            name: { type: String, required: true },
            videoIds: [{ type: String, required: true }],
        },
    ],
});
exports.default = (0, mongoose_1.model)("Playlist", PlaylistSchema);
//# sourceMappingURL=Playlist.js.map