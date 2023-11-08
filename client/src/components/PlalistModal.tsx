import { useState } from "react";
import {
	CheckBox,
	CloseBtn,
	Container,
	Form,
	Input,
	Label,
	ListCont,
	ListItem,
	Modal,
	ModalButton,
} from "../styles/PlaylistModal.css";
import IPlaylists from "../types/playlist";
import { addToPlaylist, deleteFromPlaylist } from "../utils/api";
import { IActions } from "../types/video";
import isVideoIdExists from "../utils/isVideoIdExists";
import Loader from "./Loader";

type Props = {
	videoId: string;
	toggleModal: boolean;
	handleToggleModal: () => void;
	setActions: React.Dispatch<React.SetStateAction<IActions>>;
	playlists: IPlaylists | null;
};

const PlalistModal: React.FC<Props> = ({
	videoId,
	toggleModal,
	handleToggleModal,
	setActions,
	playlists,
}) => {
	const [playlistName, setPlaylistName] = useState<string>("");
	const [submitting, setSubmitting] = useState<boolean>(false);
	// const navigation = useNavigation();
	// console.log(navigation.state);
	console.log(submitting);

	const handleCloseBtn = () => {
		setPlaylistName("");
		handleToggleModal();
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// handleSubmitting
		setSubmitting(true);

		const data = await addToPlaylist(playlistName, videoId);
		setActions((prevActions) => ({ ...prevActions, playlists: data.playlists }));

		setSubmitting(false);
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;

        // handleSubmitting
        setSubmitting(true)
		const data = checked
			? await addToPlaylist(name, videoId)
			: await deleteFromPlaylist(name, videoId);
        setSubmitting(false)

		setActions((prevActions) => ({ ...prevActions, playlists: data.playlists }));
	};

	return (
		<Container $toggle={`${toggleModal}`}>
			<Modal>
                <Loader display={submitting} />
				<CloseBtn
					size="1.5rem"
					onClick={handleCloseBtn}
				/>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="Playlist name"
						value={playlistName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPlaylistName(e.target.value)
						}
						required
					/>
					<ModalButton type="submit">{submitting ? "CREATING..." : "CREATE"}</ModalButton>
					<ModalButton
						type="button"
						onClick={handleCloseBtn}
					>
						CANCEL
					</ModalButton>
					{/* -----------Playlist Cont-------------- */}
					{Array.isArray(playlists) &&
						playlists.length > 0 &&
						playlists?.map((playlist, idx) => (
							<ListCont key={idx}>
								<ListItem>
									<Label>
										<CheckBox
											name={playlist.name}
											checked={isVideoIdExists(playlist.videoIds, videoId)}
											onChange={handleChange}
										/>
										&nbsp;&nbsp;
										{playlist.name}
									</Label>
								</ListItem>
							</ListCont>
						))}
					{/* ---------------------------- */}
				</Form>
			</Modal>
		</Container>
	);
};

export default PlalistModal;
