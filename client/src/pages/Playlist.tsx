import { useLoaderData } from "react-router-dom";
import { getAllPlaylist } from "../utils/api";
import IVideo from "../types/video";
import { useState } from "react";
import { Container } from "../styles/Playlist.css.tsx";
import PlaylistCard from "../components/PlaylistCard.tsx";

interface Playlist {
	name: string;
	video: IVideo;
    numOfVideos: number
}

export const loader = async () => {
	const data = await getAllPlaylist();
	return data.success ? data.allPlaylist : null;
};

const Playlist = () => {
	const allPlaylist = useLoaderData() as Playlist[];
	const [playlists, setPlaylists] = useState<Playlist[]>(allPlaylist);

	console.log(playlists);

	return (
		<Container>
			{playlists.map((item, idx) => (
				<PlaylistCard
					key={idx}
					name={item.name}
					video={item.video}
                    numOfVideos={item.numOfVideos}
				/>
			))}
		</Container>
	);
};

export default Playlist;
