import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import { Container, DeleteBtn, Wrapper } from "./Playlist.css";
import { IVideo } from "../../types";
import { deletePlaylist, getAllPlaylist } from "../../utils";
import { PlaylistCard } from "../../components";
import { EmptyCont, EmptyTitle, EmptyWrapper } from "..";

interface Playlist {
	name: string;
	video: IVideo;
	numOfVideos: number;
}

export const loader = async () => {
	const data = await getAllPlaylist();
	// console.log(data);
	return data.success ? data.allPlaylist : null;
};

const Playlist = () => {
	const allPlaylist = useLoaderData() as Playlist[];
	const filteredPlaylists = allPlaylist.filter(item => item.numOfVideos !== 0);

	const [playlists, setPlaylists] = useState<Playlist[]>(filteredPlaylists);

	const handleClick = async (name: string) => {
		const data = await deletePlaylist(name);
		data.success &&
			setPlaylists(prevPlaylists =>
				prevPlaylists.filter(item => item.name !== name)
			);
	};

	return (
		<>
			{playlists.length > 0 ? (
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
			) : (
				<EmptyCont>
					<EmptyWrapper>
						<EmptyTitle>You have not liked any videos yet!</EmptyTitle>
						<Link to="/host/videos">Explore Videos</Link>
					</EmptyWrapper>
				</EmptyCont>
			)}
		</>
	);
};

export default Playlist;
