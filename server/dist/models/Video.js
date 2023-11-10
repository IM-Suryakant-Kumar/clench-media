"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VideoSchema = new mongoose_1.Schema({
    videoId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: String, required: true },
    views: { type: String, required: true },
    duration: { type: String, required: true },
    categoryName: { type: String, required: true },
    published: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Video", VideoSchema);
//# sourceMappingURL=Video.js.map