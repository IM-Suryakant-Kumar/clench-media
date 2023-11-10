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
exports.logout = exports.guestLogin = exports.login = exports.createUser = exports.test = void 0;
const User_1 = __importDefault(require("../models/User"));
const errors_1 = require("../errors");
const jwtToken_1 = require("../utils/jwtToken");
const http_status_codes_1 = require("http-status-codes");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// test
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_codes_1.StatusCodes.OK).json({ message: "Hello world!" });
});
exports.test = test;
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!(name && email && password))
        throw new errors_1.BadRequestError("Please provide all values");
    const emailAlreadyExists = yield User_1.default.findOne({ email });
    if (emailAlreadyExists)
        throw new errors_1.UnauthenticatedError("Email is already exists");
    const user = yield User_1.default.create({ name, email, password });
    (0, jwtToken_1.sendToken)(user, http_status_codes_1.StatusCodes.CREATED, res);
});
exports.createUser = createUser;
// login user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!(email && password))
        throw new errors_1.BadRequestError("Please provide all values");
    const user = yield User_1.default.findOne({ email });
    if (!user)
        throw new errors_1.UnauthenticatedError("Invalid credentials!");
    const isPasswordCorrect = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordCorrect)
        throw new errors_1.UnauthenticatedError("Invalid credentials!");
    (0, jwtToken_1.sendToken)(user, http_status_codes_1.StatusCodes.OK, res);
});
exports.login = login;
// guest login
const guestLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email: "clench@gmail.com" });
    if (!user)
        throw new errors_1.UnauthenticatedError("Invalid credentials!");
    const isPasswordCorrect = yield bcryptjs_1.default.compare("secret", user.password);
    if (!isPasswordCorrect)
        throw new errors_1.UnauthenticatedError("Invalid credentials!");
    (0, jwtToken_1.sendToken)(user, http_status_codes_1.StatusCodes.OK, res);
});
exports.guestLogin = guestLogin;
// logout user
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ success: true, message: "Logged out successflly!" });
});
exports.logout = logout;
//# sourceMappingURL=auth.js.map