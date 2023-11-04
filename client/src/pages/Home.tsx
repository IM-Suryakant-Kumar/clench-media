import { useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Home.css";
import { getAllVideos, getLoggedInUser } from "../utils/api";
import VideoCard from "../components/VideoCard";
import IVideo from "../types/video";

export const loader = async () => {
	const data = await getAllVideos();
	return data.success ? data.videos : null;
};

const Home = () => {
	const [setNewUser]: [React.Dispatch<unknown>] = useOutletContext();
	const videos: IVideo[] = useLoaderData();

	useEffect(() => {
		(async () => {
			const { user } = await getLoggedInUser();
			setNewUser(user);
		})();
	}, []);

	return (
		<Container>
			{videos?.map((video, idx) => (
				<VideoCard
					key={idx}
					video={video}
				/>
			))}
		</Container>
	);
};

export default Home;
