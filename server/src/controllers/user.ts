import { Request, Response } from "express";
import { UnauthenticatedError } from "../errors";
import { StatusCodes } from "http-status-codes";

// get user
export const getUser = async (req: Request, res: Response): Promise<void> => {
	const newReq: any = req;

	if (!newReq.user) throw new UnauthenticatedError("Authentication failed!");

	const { name, email } = newReq.user;

	res.status(StatusCodes.OK).json({
		success: true,
		user: {
			name,
			email,
		},
	});
};
