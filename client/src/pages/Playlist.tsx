import { useLoaderData } from "react-router-dom";
import { getAllPlaylist } from "../utils/api";

export const loader = async () => {
	const data = await getAllPlaylist();

	return data.success ? data.allPlaylist : null;
};
const Playlist = () => {
	const allPlaylist = useLoaderData();
	console.log(allPlaylist);
    
	return <div>Playlist</div>;
};

export default Playlist;
