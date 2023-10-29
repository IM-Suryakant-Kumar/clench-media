import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

const errorhandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
	const customError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message || "Something went wrong, try again!!!",
	};

	if (err.name === "ValidationError") {
		customError.message = Object.values(err.errors)
			.map((item: any) => item.message)
			.join();
	}

	if (err.code && err.code === 11000) {
		customError.message = `Duplicate value entered for ${Object.keys(
			err.keyValue,
		)} field, please choose another value`;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	if (err.name === "CastError") {
		customError.message = `No item found with id : ${err.value}`;
		customError.statusCode = StatusCodes.NOT_FOUND;
	}

	// Wrong JWT error
	if (err.name === "JsonWebTokenError") {
		customError.message = `Json Web Token is invalid, Try again `;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	// JWT EXPIRE error
	if (err.name === "TokenExpiredError") {
		customError.message = `Json Web Token is Expired, Try again `;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	res.status(customError.statusCode).json({ success: false, message: customError.message });
};

export default errorhandlerMiddleware;
