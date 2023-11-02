import axios from "axios";
import { LoaderFunctionArgs } from "react-router-dom";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: "50",
	},
	headers: {
		"X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

const fetchFromApi = async (url: string) => {
	return (await axios.get(`${BASE_URL}/${url}`, options)).data.items;
};

export const getLatestVideos = async ({ request }: LoaderFunctionArgs) => {
    console.log(request)
	return await fetchFromApi(`search?part=snippet&q=new`);
};
