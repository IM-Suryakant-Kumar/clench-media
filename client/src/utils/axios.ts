import axios from "axios";
import { getTokenFromLocalStorage } from ".";

const baseURL: string = import.meta.env.VITE_BASE_URL;

export const instance = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${getTokenFromLocalStorage()}`,
	},
});
