import { useState } from "react";
import { LoaderFunctionArgs, useLoaderData, useParams, Link } from "react-router-dom";
import { Container, DeleteBtn, Wrapper } from "../Like/Like.css";
import { EmptyCont, EmptyTitle, EmptyWrapper } from "..";
import { deleteFromPlaylist, getPlaylistVideos } from "../../utils";
import { IVideo } from "../../types";
import { VideoCard } from "../../components";

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
		data.success &&
			setVideos(prevVideos => prevVideos.filter(v => v.videoId !== videoId));
	};

	return (
		<>
			{videos.length > 0 ? (
				<Container>
					{videos.map((video, idx) => (
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

export default PlaylistVideos;
