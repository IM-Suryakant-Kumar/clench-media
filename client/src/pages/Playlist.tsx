import { useLoaderData } from "react-router-dom";
import { getAllPlaylist } from "../utils/api";
import IVideo from "../types/video";
import { useState } from "react";
import { Container, DeleteBtn, Wrapper } from "../styles/Playlist.css.tsx";
import PlaylistCard from "../components/PlaylistCard.tsx";

interface Playlist {
	name: string;
	video: IVideo;
	numOfVideos: number;
}

export const loader = async () => {
	const data = await getAllPlaylist();
	return data.success ? data.allPlaylist : null;
};

const Playlist = () => {
	const allPlaylist = useLoaderData() as Playlist[];
	const [playlists, setPlaylists] = useState<Playlist[]>(allPlaylist);

	const handleClick = async (name: string) => {
		console.log(name);
		// const data = await deleteLike(videoId)
		// data.success && setVideos(prevVideos => prevVideos.filter(v => v.videoId !== videoId))
		setPlaylists((prevPlaylists) => prevPlaylists.filter((item) => item.name !== name));
	};

	return (
		<Container>
			{playlists.map((item, idx) => (
				<Wrapper key={idx}>
					<PlaylistCard
						name={item.name}
						video={item.video}
						numOfVideos={item.numOfVideos}
					/>
					<DeleteBtn
						size="2rem"
						color="#ff607d"
						onClick={() => handleClick(item.name)}
					/>
				</Wrapper>
			))}
		</Container>
	);
};

export default Playlist;
