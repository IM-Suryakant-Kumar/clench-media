import { Link } from "react-router-dom";
import {
	Container,
	CardMedia,
	Title,
	CardCont,
	InfoCont,
	Duration,
	PlayButton,
    CreatorName,
} from "../styles/VideoCard.css";
import IVideo from "../types/video";

type Props = {
	video: IVideo;
};

const VideoCard: React.FC<Props> = ({ video: { videoId, title, duration, creator } }) => {
	return (
		<Container>
			<CardCont>
				<Link to={`videos/${videoId}`}>
					<CardMedia
						src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
						alt={title}
					/>
					<PlayButton />
					<Duration>{duration}</Duration>
				</Link>
			</CardCont>
			<InfoCont>
				<Title>{title.slice(0, 60)}</Title>
                <CreatorName>{creator}</CreatorName>
			</InfoCont>
		</Container>
	);
};

export default VideoCard;
