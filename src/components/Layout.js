import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import "../styles/layout.css";

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<main>
				<SideBar />
                <div className="content">
				    <Outlet />
                </div>
			</main>
		</div>
	);
};

export default Layout;
