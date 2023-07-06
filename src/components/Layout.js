import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import "../styles/layout.css"

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<div className="sidebar">
					<SideBar />
				</div>
				<div className="outlet">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
