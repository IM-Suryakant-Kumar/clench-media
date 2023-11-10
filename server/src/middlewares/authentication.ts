import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors";
import User from "../models/User";

export const authenticateUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	// const { token } = req.cookies;
	// check header
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer"))
		throw new UnauthenticatedError("Authentication Invalid!");

	const token = authHeader.split(" ")[1];
	if (token === "null") throw new UnauthenticatedError("Authentication Invalid!");

	const JWT_SECRET = process.env.JWT_SECRET || "something";
	const verifiedData: any = jwt.verify(token, JWT_SECRET);

	const newReq: any = req;
	newReq.user = await User.findById(verifiedData._id);
	next();
};

export const authorizedUser = (...roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const newReq: any = req;
		if (!roles.includes(newReq.user.role))
			throw new UnauthenticatedError("Unauthorized to access this route");
		next();
	};
};
