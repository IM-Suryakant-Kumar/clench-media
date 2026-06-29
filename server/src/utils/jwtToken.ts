import { Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../types/User";

const createJWTToken = (user: IUser) => {
	return jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_SECRET!, {
		expiresIn: "5d",
	});
};

export const sendToken = (user: IUser, statusCode: number, res: Response) => {
	const token = createJWTToken(user);

	const COOKIE_LIFETIME: number = Number(process.env.COOKIE_LIFETIME) || 5;

	res.status(statusCode).json({
		success: true,
		message: "logged in successfully",
		token: token,
	});
};
