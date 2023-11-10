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
require("express-async-errors");
const dotenv_1 = require("dotenv");
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const db_1 = __importDefault(require("./db"));
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const video_1 = __importDefault(require("./routes/video"));
const like_1 = __importDefault(require("./routes/like"));
const dislike_1 = __importDefault(require("./routes/dislike"));
const save_1 = __importDefault(require("./routes/save"));
const playlist_1 = __importDefault(require("./routes/playlist"));
const history_1 = __importDefault(require("./routes/history"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authentication_1 = require("./middlewares/authentication");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("tiny"));
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
}));
// Router
app.use(auth_1.default);
app.use(user_1.default);
app.use(video_1.default);
app.use(authentication_1.authenticateUser, like_1.default);
app.use(authentication_1.authenticateUser, dislike_1.default);
app.use(authentication_1.authenticateUser, save_1.default);
app.use(authentication_1.authenticateUser, playlist_1.default);
app.use(authentication_1.authenticateUser, history_1.default);
// errorhandler
app.use(middlewares_1.notFoundMiddleware);
app.use(middlewares_1.errorHandlerMiddleware);
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "MONGO_URL";
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.default)(MONGO_URL);
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
//# sourceMappingURL=app.js.map