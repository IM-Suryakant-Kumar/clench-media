import { Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../types/User";

const createJWTToken = (user: IUser) => {
	const JWT_SECRET = process.env.JWT_SECRET || "Something";
	const JWT_LIFETIME = process.env.JWT_LIFETIME;

	return jwt.sign({ _id: user._id, name: user.name }, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};

export const sendToken = (user: IUser, statusCode: number, res: Response) => {
	const token = createJWTToken(user);

	const COOKIE_LIFETIME: number = Number(process.env.COOKIE_LIFETIME) || 5;

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
