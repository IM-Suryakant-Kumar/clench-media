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
import { addToPlaylist } from "../utils/api";
import { IActions } from "../types/video";
import isVideoIdExists from "../utils/isVideoIdExists";

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
	const [name, setName] = useState<string>("");

	const handleCloseBtn = () => {
		setName("");
		handleToggleModal();
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const data = await addToPlaylist(name, videoId);

		// if (data.success)
		// 	setActions((prevActions) => ({
		// 		...prevActions,
		// 		playlists: data.playlists,
		// 	}));
	};

	const newPlaylist = [
		{ name: "Supplementary", videoIds: ["PxNDgI8SD3U"] },
		{ name: "javascript", videoIds: [] },
		{ name: "typesript", videoIds: [] },
		{ name: "react", videoIds: [] },
	];

	return (
		<Container $toggle={`${toggleModal}`}>
			<Modal>
				<CloseBtn
					size="1.5rem"
					onClick={handleCloseBtn}
				/>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						placeholder="Playlist name"
						value={name}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
					/>
					<ModalButton type="submit">CREATE</ModalButton>
					<ModalButton
						type="button"
						onClick={handleCloseBtn}
					>
						CANCEL
					</ModalButton>
					{/* -----------Playlist Cont-------------- */}
					{newPlaylist.length > 0 &&
						newPlaylist?.map((playlist, idx) => (
							<ListCont key={idx}>
								<ListItem>
									<Label>
										<CheckBox
											checked={isVideoIdExists(
												playlist.videoIds,
												videoId,
											)}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>,
											) => console.log(e.target.checked)}
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
