import { useState } from "react";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import IVideo from "../types/video";
import { Container, DeleteBtn, Wrapper } from "../styles/Like.css";
import VideoCard from "../components/VideoCard";
import { deleteFromPlaylist, getPlaylistVideos } from "../utils/api";

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const name = params.name as string;
	const data = await getPlaylistVideos(name);
	return data.success ? data.playlistVideos : null;
};

const PlaylistVideos = () => {
	const playlistVideos = useLoaderData() as IVideo[];
	const [videos, setVideos] = useState<IVideo[]>(playlistVideos);
	const { name } = useParams();

	const handleClick = async (videoId: string) => {
		const data = await deleteFromPlaylist(name as string, videoId);
		data.success && setVideos(prevVideos => prevVideos.filter(v => v.videoId !== videoId))
	};

	return (
		<Container>
			{Array.isArray(videos) &&
				videos.map((video, idx) => (
					<Wrapper key={idx}>
						<VideoCard video={video} />
						<DeleteBtn
							size="2rem"
							color="#ff607d"
							onClick={() => handleClick(video.videoId)}
						/>
					</Wrapper>
				))}
		</Container>
	);
};

export default PlaylistVideos;
