import { useLoaderData } from "react-router-dom";
import { deleteLike, getAllLikedVideos } from "../utils/api";
import IVideo from "../types/video";
import { Container, DeleteBtn, Wrapper } from "../styles/Like.css";
import VideoCard from "../components/VideoCard";
import { useState } from "react";

export const loader = async () => {
	const data = await getAllLikedVideos();
	return data.success ? data.likedVideos : null;
};

const Like = () => {
	const likedVideos = useLoaderData() as IVideo[];
    const [videos , setVideos] = useState<IVideo[]>(likedVideos)

    const handleClick = async (videoId: string) => {
        const data = await deleteLike(videoId)
        data.success && setVideos(prevVideos => prevVideos.filter(v => v.videoId !== videoId))
    }

	return (
		<Container>
			{videos.map((video, idx) => (
				<Wrapper key={idx}>
					<VideoCard
						video={video}
					/>
                    <DeleteBtn size="2rem" onClick={() => handleClick(video.videoId)} />
				</Wrapper>
			))}
		</Container>
	);
};

export default Like;
