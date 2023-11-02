import { LoaderFunctionArgs } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Home.css";
// import { NavLink } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }: LoaderFunctionArgs) => {
	return null;
};

const Home = () => {

	return (
		<Container>Home</Container>
	);
};

export default Home;
