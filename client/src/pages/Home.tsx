import { useEffect } from "react";
import { LoaderFunctionArgs, useLoaderData, useOutletContext } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Home.css";
import { getAllVideos, getLoggedInUser } from "../utils/api";
// import { NavLink } from "react-router-dom";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const data = await getAllVideos();
	return data.success ? data.videos : null;
};

const Home = () => {
	const [setNewUser] = useOutletContext();
	const videos = useLoaderData();
	console.log(videos);

	useEffect(() => {
		(async () => {
			const { user } = await getLoggedInUser();
			setNewUser(user);
			console.log("render");
		})();
	}, []);

	return <Container>Home</Container>;
};

export default Home;
