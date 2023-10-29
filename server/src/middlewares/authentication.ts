import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors";
import User from "../models/User";

const authenticateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const { token } = req.cookies;

	if (!token) throw new UnauthenticatedError("Authentication failed!");

	const JWT_SECRET = process.env.JWT_SECRET || "something";
	const { _id } = jwt.verify(token, JWT_SECRET);

	user = await User.findById(_id);

	req.user = user;
	next();
};
