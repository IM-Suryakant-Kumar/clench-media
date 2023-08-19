import React from "react";
import { NavLink } from "react-router-dom";
import {
	MdHistory,
	MdOutlineExplore,
	MdOutlineHome,
	MdOutlineThumbUp,
	MdOutlineWatchLater,
	MdPlaylistAdd
} from "react-icons/md";
import "../styles/sideBar.css";

const SideBar = () => {
	return (
		<section className="sidebar-cont">
			<NavLink to="/" className="sidebar-link link">
				<MdOutlineHome size="1.5em" />
				<span>Home</span>
			</NavLink>
			<NavLink to="/explore" className="sidebar-link link">
				<MdOutlineExplore size="1.5em" />
				<span>Explore</span>
			</NavLink>
			<NavLink to="/liked" className="sidebar-link link">
				<MdOutlineThumbUp size="1.5em" />
				<span>Liked</span>
			</NavLink>
			<NavLink to={"/playlists"} className="sidebar-link link">
				<MdPlaylistAdd size="1.5em" />
				<span className="text-xs">Playlist</span>
			</NavLink>
			<NavLink to={"/watchlater"} className="sidebar-link link">
				<MdOutlineWatchLater size="1.5em" />
				<span className="text-xs">Watch later</span>
			</NavLink>
			<NavLink to={"/history"} className="sidebar-link link">
				<MdHistory size="1.5em" />
				<span className="text-xs">History</span>
			</NavLink>
		</section>
	);
};

export default SideBar;
