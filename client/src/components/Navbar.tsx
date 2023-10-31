import { Header, Left, LogoText, Right, Logo, SearchForm } from "../styles/Navbar.css";
import LogoImg from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/videos")
    }

	return (
		<Header>
			<Left>
				<Logo
					src={LogoImg}
					alt="logo"
					width="35px"
					height="35px"
				/>
				<Link to="/">
					<LogoText>ClenchMedia</LogoText>
				</Link>
			</Left>
			<Right>
				<SearchForm onSubmit={handleSearch}>

                </SearchForm>
			</Right>
		</Header>
	);
};

export default Navbar;
