"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = require("../middlewares/authentication");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.route("/me").get(authentication_1.authenticateUser, user_1.getUser);
exports.default = router;
//# sourceMappingURL=user.js.map