import { NavLink } from "react-router-dom";
import { Container, Text } from "../styles/Sidebar.css";
import {
	MdOutlineHome,
	MdOutlineThumbUp,
	MdPlaylistAdd,
	MdOutlineExplore,
	MdOutlineWatchLater,
	MdHistory,
} from "react-icons/md";

const Sidebar = () => {
	return (
		<Container>
			<NavLink to="/">
				<MdOutlineHome size="1.5em" />
				<Text>Home</Text>
			</NavLink>
			<NavLink to="/videos">
				<MdOutlineExplore size="1.5em" />
				<Text>Explore</Text>
			</NavLink>
			<NavLink to="/liked">
				<MdOutlineThumbUp size="1.5em" />
				<Text>Liked</Text>
			</NavLink>
			<NavLink to="/playlists">
				<MdPlaylistAdd size="1.5em" />
				<Text>Playlist</Text>
			</NavLink>
			<NavLink to="/watchlater">
				<MdOutlineWatchLater size="1.5em" />
				<Text>Watch later</Text>
			</NavLink>
			<NavLink to="/history">
				<MdHistory size="1.5em" />
				<Text>History</Text>
			</NavLink>
		</Container>
	);
};

export default Sidebar;
