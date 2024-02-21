import { LoaderFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";
import { IApiError, ILUser, IRUser, User } from "../types";
import { addTokenToLocalStorage, instance as axios, filterByCategory, filterBySearch, getTokenFromLocalStorage, removeTokenFromLocalStorage } from ".";

export interface IAuthRes {
	success: boolean;
	message: string;
	token: string;
	user: User;
}

// User API
export const register = async (user: IRUser) => {
	try {
		const { data } = await axios.post("/register", user);
		addTokenToLocalStorage(data.token);
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
		const { data } = await axios.post("/login", user);
		addTokenToLocalStorage(data.token);
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
		const { data } = await axios.get("/guest-login");
		addTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const logout = async () => {
	try {
		removeTokenFromLocalStorage();
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
		// set header for new token
		const { data } = await axios.get("/me", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		// console.log(data);
		return data;
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
		const search: string =
			new URL(request.url).searchParams.get("search") || "";
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
		const { data } = await axios.get(`/videos/${params.id}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
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
		const { data } = await axios.post(
			"/like",
			{ videoId },
			{
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}
		);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteLike = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/like/${videoId}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getAllLikedVideos = async () => {
	try {
		const { data } = await axios.get("/like", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		console.log(data);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// Dislike API
export const createDislike = async (videoId: string) => {
	try {
		const { data } = await axios.post(
			"/dislike",
			{ videoId },
			{
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}
		);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteDislike = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/dislike/${videoId}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
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
		const { data } = await axios.post(
			"/save",
			{ videoId },
			{
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}
		);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteFromSave = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/save/${videoId}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getAllSavedVideos = async () => {
	try {
		const { data } = await axios.get("/save", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

// History API
export const AddToHistory = async (videoId: string) => {
	try {
		const { data } = await axios.post(
			"/history",
			{ videoId },
			{
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}
		);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const DeleteFromHistory = async (videoId: string) => {
	try {
		const { data } = await axios.delete(`/history/${videoId}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getAllHistoryVideos = async () => {
	try {
		const { data } = await axios.get("/history", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
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
		const { data } = await axios.post(
			"/playlist",
			{ name, videoId },
			{
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}
		);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deleteFromPlaylist = async (name: string, videoId: string) => {
	try {
		const { data } = await axios.put(
			`/playlist`,
			{ name, videoId },
			{
				headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
			}
		);
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getAllPlaylist = async () => {
	try {
		const { data } = await axios.get("/playlist", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const getPlaylistVideos = async (name: string) => {
	try {
		const { data } = await axios.get(`/playlist/${name}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};

export const deletePlaylist = async (name: string) => {
	try {
		const { data } = await axios.patch(`/playlist/${name}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const newError: IApiError = error as IApiError;
		console.log(newError.response.data);
		return newError.response.data;
	}
};
