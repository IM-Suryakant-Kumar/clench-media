"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = exports.notFoundMiddleware = void 0;
var not_found_1 = require("./not-found");
Object.defineProperty(exports, "notFoundMiddleware", { enumerable: true, get: function () { return __importDefault(not_found_1).default; } });
var error_handler_1 = require("./error-handler");
Object.defineProperty(exports, "errorHandlerMiddleware", { enumerable: true, get: function () { return __importDefault(error_handler_1).default; } });
//# sourceMappingURL=index.js.map