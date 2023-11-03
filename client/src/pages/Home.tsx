import { useEffect } from "react"
import { LoaderFunctionArgs, useOutletContext } from "react-router-dom";
import { Container, CatCont, FilterTitle } from "../styles/Home.css";
import { getLoggedInUser } from "../utils/api";
// import { NavLink } from "react-router-dom";

export const loader = ({ request }: LoaderFunctionArgs) => {
	return null;
};

const Home = () => {
    const [setNewUser] = useOutletContext();
    
    useEffect(() => {
        (async () => {
            const { user } = await getLoggedInUser();
            setNewUser(user);
            console.log("render")
        })()
    }, [])

	return (
		<Container>Home</Container>
	);
};

export default Home;
