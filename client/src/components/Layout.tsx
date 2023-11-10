import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLoggedInUser } from "../utils/api";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container, Main, Wrapper } from "../styles/Layout.css";
import { useState } from "react";
import { User } from "../types/user";
import Loader from "./Loader";

export const loader = async () => {
	const data = await getLoggedInUser();
	return data.success ? data.user : null;
};

const Layout = () => {
	const user = useLoaderData() as User | null;
	const [newUser, setNewUser] = useState(user);

	const navigation = useNavigation();

	return (
		<Container>
			{navigation.state === "loading" && <Loader display={true} />}
			<Wrapper>
				<Navbar
					user={newUser}
					setUser={setNewUser}
				/>
				<Main>
					<Sidebar />
					<Outlet context={[setNewUser]} />
				</Main>
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
