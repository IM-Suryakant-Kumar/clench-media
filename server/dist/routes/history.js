"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const history_1 = require("../controllers/history");
const router = (0, express_1.Router)();
router.route("/history").post(history_1.addToHistory).get(history_1.getAllHistoryVideos);
router.route("/history/:videoId").delete(history_1.deleteFromHistory);
exports.default = router;
//# sourceMappingURL=history.js.map