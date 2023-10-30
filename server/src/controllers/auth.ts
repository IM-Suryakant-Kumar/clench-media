import { Request, Response } from "express";
import User from "../models/User";
import { BadRequestError, UnauthenticatedError } from "../errors";
import { sendToken } from "../utils/jwtToken";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";

// test
export const test = async (req: Request, res: Response) => {
	res.status(StatusCodes.OK).json({ message: "Hello world!" });
};

// create user
export const createUser = async (req: Request, res: Response): Promise<void> => {
	const { name, email, password } = req.body;

	if (!(name && email && password)) throw new BadRequestError("Please provide all values");

	const emailAlreadyExists = await User.findOne({ email });
	if (emailAlreadyExists) throw new UnauthenticatedError("Email is already exists");

	const user = await User.create({ name, email, password });

	sendToken(user, StatusCodes.CREATED, res);
};

// login user
export const login = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;

	if (!(email && password)) throw new BadRequestError("Please provide all values");

	const user = await User.findOne({ email });
	if (!user) throw new UnauthenticatedError("Invalid credentials!");

	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials!");

	sendToken(user, StatusCodes.OK, res);
};

// guest login
export const guestLogin = async (req: Request, res: Response): Promise<void> => {

	const user = await User.findOne({ email: "clench@gmail.com" });
	if (!user) throw new UnauthenticatedError("Invalid credentials!");

	const isPasswordCorrect = await bcrypt.compare("secret", user.password);
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials!");

	sendToken(user, StatusCodes.OK, res);
};

// logout user
export const logout = async (req: Request, res: Response): Promise<void> => {
	res.cookie("token", null, {
		expires: new Date(Date.now()),
	});

	res.status(StatusCodes.OK).json({ success: true, message: "Logged out successflly!" });
};
