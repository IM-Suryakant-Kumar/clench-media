import { NavLink } from "react-router-dom";
import { Container, Text } from "./Sidebar.css";
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
			<NavLink to="/host/videos">
				<MdOutlineExplore size="1.5em" />
				<Text>Explore</Text>
			</NavLink>
			<NavLink to="/host/like">
				<MdOutlineThumbUp size="1.5em" />
				<Text>Liked</Text>
			</NavLink>
			<NavLink to="/host/playlists">
				<MdPlaylistAdd size="1.5em" />
				<Text>Playlist</Text>
			</NavLink>
			<NavLink to="/host/watchlater">
				<MdOutlineWatchLater size="1.5em" />
				<Text>Watch later</Text>
			</NavLink>
			<NavLink to="/host/history">
				<MdHistory size="1.5em" />
				<Text>History</Text>
			</NavLink>
		</Container>
	);
};

export default Sidebar;
