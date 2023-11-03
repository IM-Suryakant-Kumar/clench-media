import { Document } from "mongoose";

export interface IVideo extends Document {
	videoId: string;
	title: string;
	description: string;
	creator: string;
	views: string;
	duration: string;
	categoryName: string;
	published: string;
}
