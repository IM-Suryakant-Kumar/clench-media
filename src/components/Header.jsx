import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.gif";
import { MdSearch, MdAccountCircle } from "react-icons/md";
import "../styles/header.css"

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/" className="logo-cont">
					<img src={Logo} alt="Logo" />
					<h2>ClenchMedia</h2>
				</Link>
				<Link to="/profile" className="profile">
					<span className="profile-icon">
						<MdAccountCircle size="2.4rem" />
					</span>
				</Link>
				<div className="search-box">
					<input type="text" placeholder="search" />
					<span className="search-icon">
						<MdSearch size="1rem" />
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
