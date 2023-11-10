"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DislikeSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    videoId: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Dislike", DislikeSchema);
//# sourceMappingURL=Dislike.js.map