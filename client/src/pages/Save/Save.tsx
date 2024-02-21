import { Link, useLoaderData } from "react-router-dom";
import { Container, DeleteBtn, Wrapper } from "../Like/Like.css";
import { useState } from "react";
import { EmptyCont, EmptyTitle, EmptyWrapper } from "..";
import { deleteFromSave, getAllSavedVideos } from "../../utils";
import { IVideo } from "../../types";
import { VideoCard } from "../../components";

export const loader = async () => {
	const data = await getAllSavedVideos();
	return data.success ? data.savedVideos : null;
};

const Save = () => {
	const savedVideos = useLoaderData() as IVideo[];
	const [videos, setVideos] = useState<IVideo[]>(savedVideos);

	const handleClick = async (videoId: string) => {
		const data = await deleteFromSave(videoId);
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

export default Save;
