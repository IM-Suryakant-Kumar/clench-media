import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.gif";
import Profile from "../images/profile.png";
import { MdSearch, MdAccountCircle } from "react-icons/md";

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/" className="logo-cont">
					<img src={Logo} alt="Logo" />
					<h2>ClenchMedia</h2>
				</Link>
				<div className="search-box">
					<input type="text" placeholder="search" />
					<span className="search-icon">
						<MdSearch size="1rem" />
					</span>
				</div>
				<Link to="/login" className="profile">
					<span className="profile-icon">
						<MdAccountCircle size="2.4rem" />
					</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
