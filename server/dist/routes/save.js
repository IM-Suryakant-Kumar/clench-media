"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const save_1 = require("../controllers/save");
const router = (0, express_1.Router)();
router.route("/save").post(save_1.createSave).get(save_1.getAllSavedVideos);
router.route("/save/:videoId").delete(save_1.deleteFromSave);
exports.default = router;
//# sourceMappingURL=save.js.map