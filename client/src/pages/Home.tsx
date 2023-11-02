import { useEffect } from "react"
import { LoaderFunctionArgs, useOutletContext } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Home.css";
import { getLoggedInUser } from "../utils/api";
// import { NavLink } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = ({ request }: LoaderFunctionArgs) => {
	return null;
};

const Home = () => {
    const [setNewUser] = useOutletContext();
    
    useEffect(() => {
        (async () => {
            const { user } = await getLoggedInUser();
            setNewUser(user);
        })()
    }, [])

	return (
		<Container>Home</Container>
	);
};

export default Home;
