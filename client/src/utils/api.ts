import axios from "./axios";
import { ILUser, IRUser } from "../types/user";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

const config = { headers: { Content_Type: "application/json" } };

export const register = async (user: IRUser) => {
	try {
		const {
			data: { message },
		} = await axios.post("/register", user, config);
		toast.success(message);
	} catch (error) {
		console.log(error?.response.data);
		return error?.response.data;
	}
};

export const login = async (user: ILUser) => {
	try {
		const {
			data: { message },
		} = await axios.post("/login", user, config);
		toast.success(message);
	} catch (error) {
		console.log(error?.response.data);
		return error?.response.data;
	}
};

export const guestLogin = async () => {
	try {
		const {
			data: { message },
		} = await axios.get("/guest-login");
		toast.success(message);
        redirect("/")
	} catch (error) {
		console.log(error?.response.data);
		return error?.response.data;
	}
};

export const logout = async () => {
	try {
		const {
			data: { message },
		} = await axios.get("/logout");
		toast.success(message);
        redirect("/")
	} catch (error) {
		console.log(error?.response.data);
		return error?.response.data;
	}
};

export const getLoggedInUser = async () => {
	try {
		return (await axios.get("/me")).data;
	} catch (error) {
		return error?.response.data;
	}
};
