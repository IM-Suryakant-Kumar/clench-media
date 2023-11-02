import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLoggedInUser } from "../utils/api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container, Main } from "../styles/Layout.css";
import { useState } from "react";

/* eslint-disable react-refresh/only-export-components */
export const loader = async () => {
	const data = await getLoggedInUser();
	return data.success ? data.user : null;
};

const Layout = () => {
	const user = useLoaderData();
	const [newUser, setNewUser] = useState(user);

	return (
		<Container>
			<Navbar
				user={newUser}
				setUser={setNewUser}
			/>
			<Main>
				<Sidebar />
				<Outlet context={[setNewUser]} />
			</Main>
			<ToastContainer
				autoClose={1000}
				pauseOnFocusLoss={false}
				theme="dark"
			/>
		</Container>
	);
};

export default Layout;
