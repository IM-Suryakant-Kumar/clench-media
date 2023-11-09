import { useLoaderData } from "react-router-dom"
import { deleteFromSave, getAllSavedVideos } from "../utils/api"
import { Container, DeleteBtn, Wrapper } from "../styles/Like.css";
import IVideo from "../types/video";
import { useState } from "react";
import VideoCard from "../components/VideoCard";

export const loader = async () => {
    const data = await getAllSavedVideos()
    return data.success ? data.savedVideos : null
}

const Save = () => {
    const savedVideos = useLoaderData() as IVideo[]
    const [videos , setVideos] = useState<IVideo[]>(savedVideos)

    const handleClick = async (videoId: string) => {
        const data = await deleteFromSave(videoId)
        data.success && setVideos(prevVideos => prevVideos.filter(v => v.videoId !== videoId))
    }

  return (
    <Container>
			{videos.map((video, idx) => (
				<Wrapper key={idx}>
					<VideoCard
						video={video}
					/>
                    <DeleteBtn size="2rem" color="#ff607d" onClick={() => handleClick(video.videoId)} />
				</Wrapper>
			))}
		</Container>
  )
}

export default Save