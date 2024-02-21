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
} from "./PlaylistModal.css";
import { IActions, IPlaylists } from "../../types";
import { addToPlaylist, deleteFromPlaylist, isVideoIdExists } from "../../utils";
import { Loader } from "..";

type Props = {
	videoId: string;
	toggleModal: boolean;
	handleToggleModal: () => void;
	setActions: React.Dispatch<React.SetStateAction<IActions>>;
	playlists: IPlaylists | null;
};

const PlaylistModal: React.FC<Props> = ({
	videoId,
	toggleModal,
	handleToggleModal,
	setActions,
	playlists,
}) => {
	const [playlistName, setPlaylistName] = useState<string>("");
	const [submitting, setSubmitting] = useState<boolean>(false);

	const handleCloseBtn = () => {
		setPlaylistName("");
		handleToggleModal();
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// handleSubmitting
		setSubmitting(true);

		const data = await addToPlaylist(playlistName, videoId);
		setActions(prevActions => ({ ...prevActions, playlists: data.playlists }));

		setSubmitting(false);
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;

		// handleSubmitting
		setSubmitting(true);
		const data = checked
			? await addToPlaylist(name, videoId)
			: await deleteFromPlaylist(name, videoId);
		setSubmitting(false);

		setActions(prevActions => ({ ...prevActions, playlists: data.playlists }));
	};

	return (
		<Container $toggle={`${toggleModal}`}>
			<Loader display={submitting} />
			<Modal>
				<CloseBtn size="1.5rem" onClick={handleCloseBtn} />
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
					<ModalButton type="submit">CREATE</ModalButton>
					<ModalButton type="button" onClick={handleCloseBtn}>
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

export default PlaylistModal;
