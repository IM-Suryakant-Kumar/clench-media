"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dislike_1 = require("../controllers/dislike");
const router = (0, express_1.Router)();
router.route("/dislike").post(dislike_1.createDislike);
router.route("/dislike/:videoId").delete(dislike_1.deleteDislike);
exports.default = router;
//# sourceMappingURL=dislike.js.map