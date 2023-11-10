"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const authentication_1 = require("../middlewares/authentication");
const router = (0, express_1.Router)();
router.route("/").get(auth_1.test);
router.route("/register").post(auth_1.createUser);
router.route("/login").post(auth_1.login);
router.route("/guest-login").get(auth_1.guestLogin);
router.route("/logout").get(authentication_1.authenticateUser, auth_1.logout);
exports.default = router;
//# sourceMappingURL=auth.js.map