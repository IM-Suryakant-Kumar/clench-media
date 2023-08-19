import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import "../styles/layout.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
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
