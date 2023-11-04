import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getSingleVideo } from "../utils/api";
import {
	Container,
	Desc,
	RelatedVideoCont,
	Text,
	Title,
	VideoCont,
	VideoPlayer,
} from "../styles/VideoDeatils.css";
import { IVideoDetails } from "../types/video";
import VideoCard from "../components/VideoCard";

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const data = await getSingleVideo({ params } as LoaderFunctionArgs);
	return data.success ? data.videoDetails : null;
};

const VideoDetails = () => {
	const videoDetails: IVideoDetails = useLoaderData();
	console.log(videoDetails);

	return (
		<Container>
			<VideoCont>
				<VideoPlayer
					src={`https://www.youtube.com/embed/${videoDetails.video.videoId}?autoplay=1`}
					// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					// allowFullScreen
				/>
				<Title>{videoDetails.video.title}</Title>
				<Text>{videoDetails.video.creator}</Text>
				<Text>{videoDetails.video.views}</Text>
				<Text>{videoDetails.video.published}</Text>
				<Desc>{videoDetails.video.description}</Desc>
			</VideoCont>
			<RelatedVideoCont>
				{videoDetails.relatedVideos?.map((video, idx) => (
					<VideoCard
						key={idx}
						video={video}
					/>
				))}
			</RelatedVideoCont>
		</Container>
	);
};

export default VideoDetails;
