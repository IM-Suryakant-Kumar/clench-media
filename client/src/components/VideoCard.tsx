import { Link } from "react-router-dom";
import { IVideo } from "../pages/Home";
import { Container, CardMedia, CardContent, Title } from "../styles/VideoCard.css";

type Props = {
	video: IVideo;
};

const VideoCard: React.FC<Props> = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	return (
		<Container>
			<Link to={`video/${videoId}`}>
				<CardMedia
					src={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
                    width="320px"
                    height="180px"
				/>
			</Link>
			<CardContent>
                <Title>{snippet?.title.slice(0, 60)}</Title>
            </CardContent>
		</Container>
	);
};

export default VideoCard;
