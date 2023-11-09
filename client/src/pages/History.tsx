import { useLoaderData } from "react-router-dom";
import { DeleteFromHistory, getAllHistoryVideos } from "../utils/api";
import { Container, DeleteBtn, Wrapper } from "../styles/Like.css";
import IVideo from "../types/video";
import { useState } from "react";
import VideoCard from "../components/VideoCard";
import { EmptyCont, EmptyTitle, EmptyWrapper } from "../styles/Common.css";
import { Link } from "react-router-dom";

export const loader = async () => {
	const data = await getAllHistoryVideos();
	return data.success ? data.historyVideos : null;
};

const History = () => {
	const savedVideos = useLoaderData() as IVideo[];
	const [videos, setVideos] = useState<IVideo[]>(savedVideos);

	const handleClick = async (videoId: string) => {
		const data = await DeleteFromHistory(videoId);
		data.success && setVideos((prevVideos) => prevVideos.filter((v) => v.videoId !== videoId));
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

export default History;
