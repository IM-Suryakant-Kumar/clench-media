"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SaveSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    videoId: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Save", SaveSchema);
//# sourceMappingURL=Save.js.map