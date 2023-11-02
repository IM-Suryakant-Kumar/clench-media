import { IVideo } from "../pages/Home";
import styled from "styled-components";
import VideoCard from "./VideoCard";

const Conatiner = styled.div``

type Props = {
	videos: IVideo[];
};

const Videos: React.FC<Props>= ({ videos }) => {

    const videoCards = videos.map((video, idx) => <VideoCard key={idx} video={video} />)

	return (<Conatiner>{videoCards}</Conatiner>);
};

export default Videos;
