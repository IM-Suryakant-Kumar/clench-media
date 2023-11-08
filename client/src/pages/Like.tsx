import { useLoaderData } from "react-router-dom";
import { getAllLikedVideos } from "../utils/api";
import IVideo from "../types/video";
import { Container } from "../styles/Like.css";
import VideoCard from "../components/VideoCard";

export const loader = async () => {
	const data = await getAllLikedVideos();
	return data.success ? data.likedVideos : null;
};

const Like = () => {
	const likedVideos = useLoaderData() as IVideo[];

	return (
		<Container>
			{likedVideos.map((video, idx) => (
				<VideoCard
					key={idx}
					video={video}
				/>
			))}
		</Container>
	);
};

export default Like;
