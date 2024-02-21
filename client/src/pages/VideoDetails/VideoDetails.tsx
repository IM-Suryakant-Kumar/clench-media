import { useMemo, useState } from "react";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import {
	ActionBtnCont,
	AddToList,
	AddToWatch,
	Container,
	Desc,
	Dislike,
	Like,
	RelatedVideoCont,
	RemoveFromWatch,
	Text,
	Title,
	VideoCont,
	VideoPlayer,
} from "./VideoDeatils.css";
import { addToSave, createDislike, createLike, deleteDislike, deleteFromSave, deleteLike, getVideoDetails } from "../../utils";
import { IActions, IVideoDetails } from "../../types";
import { PlaylistModal, VideoCard } from "../../components";

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const data = await getVideoDetails({ params } as LoaderFunctionArgs);
	return data.success ? data.videoDetails : null;
};

const VideoDetails = () => {
	const videoDetails: IVideoDetails = useLoaderData() as IVideoDetails;
	const videoId = useParams().id as string;

	const [actions, setActions] = useState<IActions>({
		isLiked: false,
		isDisliked: false,
		isSaved: false,
		playlists: null,
	});
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	// console.log(actions.playlists);

	useMemo(() => {
		setActions(prevActions => ({
			...prevActions,
			isLiked: videoDetails.actions.isLiked,
			isDisliked: videoDetails.actions.isDisliked,
			isSaved: videoDetails.actions.isSaved,
			playlists: videoDetails.actions.playlists,
		}));
	}, [videoDetails]);

	const handleLike = async () => {
		actions.isDisliked &&
			setActions(prevActions => ({
				...prevActions,
				isDisliked: !prevActions?.isDisliked,
			})),
			await deleteDislike(videoId);

		actions.isLiked ? await deleteLike(videoId) : await createLike(videoId);

		setActions(prevActions => ({
			...prevActions,
			isLiked: !prevActions?.isLiked,
		}));
	};

	const handleDislike = async () => {
		actions.isLiked &&
			setActions(prevActions => ({
				...prevActions,
				isLiked: !prevActions?.isLiked,
			})),
			await deleteLike(videoId);

		actions.isDisliked
			? await deleteDislike(videoId)
			: await createDislike(videoId);

		setActions(prevActions => ({
			...prevActions,
			isDisliked: !prevActions?.isDisliked,
		}));
	};

	const handleSaved = async () => {
		actions.isSaved ? await deleteFromSave(videoId) : await addToSave(videoId);

		setActions(prevActions => ({
			...prevActions,
			isSaved: !prevActions?.isSaved,
		}));
	};

	const handleToggleModal = () => setToggleModal(prevState => !prevState);

	return (
		<Container>
			<VideoCont>
				<VideoPlayer
					src={`https://www.youtube.com/embed/${videoDetails.video.videoId}?autoplay=1`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<Title>{videoDetails.video.title}</Title>
				<Text>{videoDetails.video.creator}</Text>
				<Text>{videoDetails.video.views}</Text>
				<Text>{videoDetails.video.published}</Text>
				<Desc>{videoDetails.video.description}</Desc>
				<ActionBtnCont>
					{actions.isLiked ? (
						<Like size="1.25rem" color="#3a85fff3" onClick={handleLike} />
					) : (
						<Like size="1.25rem" onClick={handleLike} />
					)}
					{actions.isDisliked ? (
						<Dislike size="1.25rem" color="#3a85fff3" onClick={handleDislike} />
					) : (
						<Dislike size="1.25rem" onClick={handleDislike} />
					)}
					{actions.isSaved ? (
						<RemoveFromWatch
							size="1.25rem"
							color="#3a85fff3"
							onClick={handleSaved}
						/>
					) : (
						<AddToWatch size="1.25rem" onClick={handleSaved} />
					)}
					<AddToList size="1.25rem" onClick={handleToggleModal} />
				</ActionBtnCont>
			</VideoCont>
			<RelatedVideoCont>
				{videoDetails.relatedVideos?.map((video, idx) => (
					<VideoCard key={idx} video={video} />
				))}
			</RelatedVideoCont>
			<PlaylistModal
				videoId={videoId}
				toggleModal={toggleModal}
				handleToggleModal={handleToggleModal}
				playlists={actions.playlists}
				setActions={setActions}
			/>
		</Container>
	);
};

export default VideoDetails;
