import "express-async-errors";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import express, { Application } from "express";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";
import connectDB from "./db";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import videoRouter from "./routes/video"
import likeRouter from "./routes/like"
import dislikeRouter from "./routes/dislike"
import saveRouter from "./routes/save"
import playlistRouter from "./routes/playlist"
import historyRouter from "./routes/history"
import cookieParser from "cookie-parser";
import { authenticateUser } from "./middlewares/authentication";

config();
const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(helmet());
app.use(morgan("tiny"));
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
		optionsSuccessStatus: 200,
	}),
);

// Router
app.use(authRouter);
app.use(userRouter);
app.use(videoRouter);
app.use(authenticateUser, likeRouter);
app.use(authenticateUser, dislikeRouter);
app.use(authenticateUser, saveRouter);
app.use(authenticateUser, playlistRouter);
app.use(authenticateUser, historyRouter);

// errorhandler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT: string | number = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "MONGO_URL";
const start = async () => {
	try {
		await connectDB(MONGO_URL);
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
