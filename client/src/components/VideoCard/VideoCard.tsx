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
	Views,
	Time,
	Dot,
} from "./VideoCard.css";
import { IVideo } from "../../types";

type Props = {
	video: IVideo;
};

const VideoCard: React.FC<Props> = ({
	video: { videoId, title, duration, creator, views, published },
}) => {
	return (
		<Container>
			<CardCont>
				<Link to={`/host/videos/${videoId}`}>
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
				<Views>{views} views</Views>
				<Time>{published}</Time>
				<Dot />
			</InfoCont>
		</Container>
	);
};

export default VideoCard;
