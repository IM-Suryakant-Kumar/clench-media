import axios from "./axios";
import { ILUser, IRUser } from "../types/user";
import { toast } from "react-toastify";

const config = { headers: { Content_Type: "application/json" } };

// User API
export const register = async (user: IRUser) => {
	try {
		const { data } = await axios.post("/register", user, config);
		toast.success("Registered Successfully!");
		return data;
	} catch (error) {
		console.log(error?.response.data);
		return error?.response.data;
	}
};

export const login = async (user: ILUser) => {
	try {
		const { data } = await axios.post("/login", user, config);
		toast.success(data.message);
		return data;
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

// Videos API

export const getAllVideos = async () => {
    try {
        const { data } = await axios.get("/videos")
        return data
    } catch (error) {
        return error.response.data
    }
}
