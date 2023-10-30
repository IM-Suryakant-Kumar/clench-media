import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLoggedInUser } from "../utils/api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container, Wrapper } from "../styles/Layout.css";

/* eslint-disable react-refresh/only-export-components */
export const loader = async () => {
	return (await getLoggedInUser()) || null;
};

const Layout = () => {
	const loaderData = useLoaderData();
	console.log(loaderData);

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Sidebar />
				<Outlet />
			</Wrapper>
			<ToastContainer
				autoClose={1000}
				pauseOnFocusLoss={false}
				theme="dark"
			/>
		</Container>
	);
};

export default Layout;
