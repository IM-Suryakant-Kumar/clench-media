import { useLoaderData } from "react-router-dom";
import { DeleteFromHistory, getAllHistoryVideos } from "../utils/api";
import { Container, DeleteBtn, Wrapper } from "../styles/Like.css";
import IVideo from "../types/video";
import { useState } from "react";
import VideoCard from "../components/VideoCard";

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
		<Container>
			{videos.map((video, idx) => (
				<Wrapper key={idx}>
					<VideoCard video={video} />
					<DeleteBtn
						size="2rem"
						onClick={() => handleClick(video.videoId)}
					/>
				</Wrapper>
			))}
		</Container>
	);
};

export default History;
