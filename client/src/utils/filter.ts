import { IVideo } from "../types";

export const filterByCategory = (videos: IVideo[], cat: string) => {
	return videos.filter(v => v.categoryName === cat);
};

export const filterBySearch = (videos: IVideo[], search: string) => {
	return videos.filter(v =>
		v.title.toLowerCase().includes(search.toLowerCase())
	);
};
