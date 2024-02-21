
import { IVideo } from "../../types";
import {
	Container,
	CardMedia,
	PlaylistIcon,
	Wrapper,
} from "./PlaylistCard.css";
import { Link } from "react-router-dom";

type Props = {
	name: string;
	video: IVideo;
	numOfVideos: number;
};

const PlaylistCard: React.FC<Props> = ({
	name,
	video: { videoId, title },
	numOfVideos,
}) => {
	return (
		<Container>
			<Link to={name}>
				<CardMedia
					src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
					alt={title}
				/>
				<Wrapper>
					<PlaylistIcon size="2.5rem" />
					&nbsp;{numOfVideos}
				</Wrapper>
			</Link>
		</Container>
	);
};

export default PlaylistCard;
