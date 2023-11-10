import axios from "axios";
import { getTokenFromLocalStorage } from "./manageToken";

const baseURL: string = import.meta.env.VITE_BASE_URL;


const instance = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${getTokenFromLocalStorage()}`,
	},
});

export default instance;
