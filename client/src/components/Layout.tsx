import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLoggedInUser } from "../utils/api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container, Main } from "../styles/Layout.css";

/* eslint-disable react-refresh/only-export-components */
export const loader = async () => {
	const res = await getLoggedInUser();
	return res.success ? res.user : null;
};

const Layout = () => {
	const user = useLoaderData();

	return (
		<Container>
			<Navbar user={user} />
			{/* <Main>
				<Sidebar />
				<Outlet />
			</Main> */}
			<ToastContainer
				autoClose={1000}
				pauseOnFocusLoss={false}
				theme="dark"
			/>
		</Container>
	);
};

export default Layout;
