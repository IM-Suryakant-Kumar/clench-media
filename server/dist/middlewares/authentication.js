"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizedUser = exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../errors");
const User_1 = __importDefault(require("../models/User"));
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { token } = req.cookies;
    if (!token || token === "undefined") {
        // check header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer"))
            throw new errors_1.UnauthenticatedError("Authentication Invalid!");
        token = authHeader.split(" ")[1];
    }
    if (!token || token === "null" || token === "undefined")
        throw new errors_1.UnauthenticatedError("Authentication Invalid!");
    const JWT_SECRET = process.env.JWT_SECRET || "something";
    const verifiedData = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    const newReq = req;
    newReq.user = yield User_1.default.findById(verifiedData._id);
    next();
});
exports.authenticateUser = authenticateUser;
const authorizedUser = (...roles) => {
    return (req, res, next) => {
        const newReq = req;
        if (!roles.includes(newReq.user.role))
            throw new errors_1.UnauthenticatedError("Unauthorized to access this route");
        next();
    };
};
exports.authorizedUser = authorizedUser;
//# sourceMappingURL=authentication.js.map