import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
	return (
		<div>
            <Outlet />
			<ToastContainer
				autoClose={1000}
				pauseOnFocusLoss={false}
				theme="dark"
			/>
		</div>
	);
};

export default Layout;
