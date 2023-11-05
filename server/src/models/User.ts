import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../types/User";

const UserSchema: Schema = new Schema(
	{
		name: { type: String, required: [true, "Please provide name!"] },
		email: { type: String, required: [true, "Please provide email!"], unique: true },
		password: { type: String, required: [true, "Please provide password!"] },
	},
	{ timestamps: true },
);

UserSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

export default model<IUser>("User", UserSchema);
