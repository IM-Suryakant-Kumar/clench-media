import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div>
			<Header />
			<main className="main">
				<SideBar />
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
