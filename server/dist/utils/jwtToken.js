"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWTToken = (user) => {
    const JWT_SECRET = process.env.JWT_SECRET || "Something";
    const JWT_LIFETIME = process.env.JWT_LIFETIME;
    return jsonwebtoken_1.default.sign({ _id: user._id, name: user.name }, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};
const sendToken = (user, statusCode, res) => {
    const token = createJWTToken(user);
    const COOKIE_LIFETIME = Number(process.env.COOKIE_LIFETIME) || 5;
    res.status(statusCode)
        .cookie("token", token, {
        maxAge: COOKIE_LIFETIME * 24 * 60 * 60 * 1000,
        httpOnly: true,
    })
        .json({
        success: true,
        message: "logged in successfully",
        token: token,
    });
};
exports.sendToken = sendToken;
//# sourceMappingURL=jwtToken.js.map