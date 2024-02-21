import { useEffect } from "react";
import { useLoaderData, useOutletContext, Link } from "react-router-dom";
import { Card, CardCont, Container, InfoCont, Title } from "./Home.css";
import { getCategories, getLoggedInUser } from "../../utils";

export const loader = async () => {
	const data = await getCategories();
	return data.success ? data.categories : null;
};

const Home = () => {
	const [setNewUser]: [React.Dispatch<unknown>] = useOutletContext();
	const categories: string[] = useLoaderData() as string[];

	useEffect(() => {
		(async () => {
			const { user } = await getLoggedInUser();
			setNewUser(user);
		})();
	}, []);

	return (
		<Container>
			<InfoCont>
				<Title>Step into the world of modern Devs</Title>
			</InfoCont>
			<CardCont>
				{categories?.map((item, idx) => (
					<Card key={idx}>
						<Link to={`/host/videos?cat=${item}`}>{item}</Link>
					</Card>
				))}
			</CardCont>
		</Container>
	);
};

export default Home;
