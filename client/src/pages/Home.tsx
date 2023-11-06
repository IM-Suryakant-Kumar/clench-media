import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Container } from "../styles/Home.css";
import { getLoggedInUser } from "../utils/api";

export const loader = async () => {
	return null;
};

const Home = () => {
	const [setNewUser]: [React.Dispatch<unknown>] = useOutletContext();

	useEffect(() => {
		(async () => {
			const { user } = await getLoggedInUser();
			setNewUser(user);
		})();
	}, []);

	return (
		<Container>
			Home
		</Container>
	);
};

export default Home;
