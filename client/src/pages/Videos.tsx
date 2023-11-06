import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Videos.css";
import { getAllVideos } from "../utils/api";
import VideoCard from "../components/VideoCard";
import IVideo from "../types/video";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const data = await getAllVideos({ request } as LoaderFunctionArgs);
	return data.success ? data.videos : null;
};

const Videos = () => {
	const videos = useLoaderData() as IVideo[];

	return (
		<Container>
			{videos?.map((video, idx) => (
				<VideoCard
					key={idx}
					video={video}
				/>
			))}
		</Container>
	);
};

export default Videos;
