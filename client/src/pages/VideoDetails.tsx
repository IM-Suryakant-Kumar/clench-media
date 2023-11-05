import { Suspense, useState } from "react";
import { Await, LoaderFunctionArgs, defer, useLoaderData } from "react-router-dom";
import { getSingleVideo } from "../utils/api";
import {
	ActionBtnCont,
	AddToList,
	AddToWatch,
	Container,
	Desc,
	Dislike,
	Like,
	RelatedVideoCont,
	RemoveFromList,
	RemoveFromWatch,
	Text,
	Title,
	VideoCont,
	VideoPlayer,
} from "../styles/VideoDeatils.css";
import { IVideoDetails } from "../types/video";
import VideoCard from "../components/VideoCard";

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const data = await getSingleVideo({ params } as LoaderFunctionArgs);
	return defer({ videoDetails: data.success ? data.videoDetails : null });
};

const VideoDetails = () => {
	const loaderData = useLoaderData();
	console.log(loaderData);

	const [isLiked, setIsLiked] = useState<boolean>();
	const [isDisliked, setIsDisliked] = useState<boolean>();
	const [isSaved, setIsSaved] = useState<boolean>();
	const [isAddedToList, setIsAddedToList] = useState<boolean>();

	const renderVideoDetails = (videoDetails: IVideoDetails) => {
		const handleLike = () => {
			isDisliked && setIsDisliked((prevState) => !prevState);
			setIsLiked((prevState) => !prevState);
		};

		const handleDislike = () => {
			isLiked && setIsLiked((prevState) => !prevState);
			setIsDisliked((prevState) => !prevState);
		};

		const handleSaved = () => setIsSaved((prevState) => !prevState);

		const handleAddedToList = () => setIsAddedToList((prevState) => !prevState);

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
					<ActionBtnCont>
						{isLiked || videoDetails.actions.isLiked ? (
							<Like
								size="1.25rem"
								color="#3a85fff3"
								onClick={handleLike}
							/>
						) : (
							<Like
								size="1.25rem"
								onClick={handleLike}
							/>
						)}
						{isDisliked || videoDetails.actions.isDisliked ? (
							<Dislike
								size="1.25rem"
								color="#3a85fff3"
								onClick={handleDislike}
							/>
						) : (
							<Dislike
								size="1.25rem"
								onClick={handleDislike}
							/>
						)}
						{isSaved || videoDetails.actions.isSaved ? (
							<RemoveFromWatch
								size="1.25rem"
								color="#3a85fff3"
								onClick={handleSaved}
							/>
						) : (
							<AddToWatch
								size="1.25rem"
								onClick={handleSaved}
							/>
						)}
						{isAddedToList || videoDetails.actions.isInPlaylist ? (
							<RemoveFromList
								size="1.25rem"
								color="#3a85fff3"
								onClick={handleAddedToList}
							/>
						) : (
							<AddToList
								size="1.25rem"
								onClick={handleAddedToList}
							/>
						)}
					</ActionBtnCont>
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

	return (
		<Suspense fallback={<h3>Loading...</h3>}>
			<Await resolve={loaderData?.videoDetails}>{renderVideoDetails}</Await>
		</Suspense>
	);
};

export default VideoDetails;
