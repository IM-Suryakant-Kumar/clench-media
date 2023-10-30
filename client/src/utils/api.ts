import axios from "./axios";
import { ILUser, IRUser } from "../types/user";
import { toast } from "react-toastify";

const config = { headers: { Content_Type: "application/json" } };

export const register = async (user: IRUser) => {
	try {
		const {
			data: { message },
		} = await axios.post("/register", user, config);
		toast.success(message);
	} catch (error) {
		return console.log(error?.response.data.message);;
	}
};

export const login = async (user: ILUser) => {
	try {
		const {
			data: { message },
		} = await axios.post("/login", user, config);
		toast.success(message);
	} catch (error) {
		return console.log(error?.response.data.message);;
	}
};

export const guestLogin = async () => {
	try {
		const {
			data: { message },
		} = await axios.get("/guest-login");
		toast.success(message);
	} catch (error) {
		return console.log(error?.response.data.message);;
	}
};

export const logout = async () => {
	try {
		const {
			data: { message },
		} = await axios.get("/logout");
		toast.success(message);
	} catch (error) {
		return console.log(error?.response.data.message);;
	}
};

export const getLoggedInUser = async () => {
	try {
		const {
			data: { user },
		} = await axios.get("/me");
		return user;
	} catch (error) {
		return console.log(error?.response.data.message);
	}
};
