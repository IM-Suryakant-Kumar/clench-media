import { Request, Response } from "express";
import { UnauthenticatedError } from "../errors";
import { StatusCodes } from "http-status-codes";

// get user
export const getUser = async (req: Request, res: Response): Promise<void> => {
	const newReq: any = req;

	if (!newReq.user) throw new UnauthenticatedError("Authentication failed!");
    
	res.status(StatusCodes.OK).json({ success: true, user: newReq.user });
};