import axios from "./axios";
import { ILUser, IRUser } from "../types/user";
import { toast } from "react-toastify";
import { LoaderFunctionArgs } from "react-router-dom";
import { filterByCategory, filterBySearch } from "./filter";
import IApiError from "../types/apiError";

const config = { headers: { Content_Type: "application/json" } };

// User API
export const register = async (user: IRUser) => {
	try {
		const { data } = await axios.post("/register", user, config);
		toast.success("Registered Successfully!");
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const login = async (user: ILUser) => {
	try {
		const { data } = await axios.post("/login", user, config);
		toast.success(data.message);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const guestLogin = async () => {
	try {
		const {
			data: { message },
		} = await axios.get("/guest-login");
		toast.success(message);
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const logout = async () => {
	try {
		const {
			data: { message },
		} = await axios.get("/logout");
		toast.success(message);
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getLoggedInUser = async () => {
	try {
		return (await axios.get("/me")).data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// Videos API

export const getAllVideos = async ({ request }: LoaderFunctionArgs) => {
	try {
		const { data } = await axios.get("/videos");
		const cat: string = new URL(request.url).searchParams.get("cat") || "";
		const search: string = new URL(request.url).searchParams.get("search") || "";
		// filterBYcategory
		cat && (data.videos = filterByCategory(data.videos, cat));
		// filterBySearch
		search && (data.videos = filterBySearch(data.videos, search));
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getCategories = async () => {
	try {
		return (await axios.get("/categories")).data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getVideoDetails = async ({ params }: LoaderFunctionArgs) => {
	try {
		const { data } = await axios.get(`/videos/${params.id}`);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// Like API
export const createLike = async (videoId: string) => {
	try {
		const { data } = await axios.post("/like", { videoId }, config);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteLike = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/like/${videoId}`);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getAllLikedVideos = async () => {
	try {
		const { data } = await axios.get("/like");
        return data
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// Dislike API
export const createDislike = async (videoId: string) => {
	try {
		const { data } = await axios.post("/dislike", { videoId }, config);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteDislike = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/dislike/${videoId}`);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// Save API
export const addToSave = async (videoId: string) => {
	try {
		const { data } = await axios.post("/save", { videoId }, config);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteFromSave = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/save/${videoId}`);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getAllSavedVideos = async () => {
	try {
		const { data } = await axios.get("/save");
        return data
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// History API
export const AddToHistory = async (videoId: string) => {
	try {
		const { data } = await axios.post("/history", { videoId }, config);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const DeleteFromHistory = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/history/${videoId}`);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// PlayList API
export const addToPlaylist = async (name: string, videoId: string) => {
	try {
		const { data } = await axios.post("/playlist", { name, videoId }, config);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteFromPlaylist = async (name: string, videoId: string) => {
	try {
		const { data } = await axios.put(`/playlist`, { name, videoId }, config);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};
