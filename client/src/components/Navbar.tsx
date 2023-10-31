import {
	Header,
	Left,
	LogoText,
	Right,
	Logo,
	SearchForm,
	Input,
	Button,
    LogCont,
} from "../styles/Navbar.css";
import LogoImg from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch, MdLogout, MdLogin } from "react-icons/md";
// import { useMemo } from "react";
// import { debounce } from "../utils/debounce";

const Navbar = () => {
	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/videos");
	};

	// const debounceChangeHandler = useMemo(() => debounce((e) => {}, 1000), )

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
					<Input
						type="search"
						placeholder="search"
						// onChange={debounceChangeHandler}
					/>
					<Button>
						<MdSearch size={"1rem"} />
					</Button>
				</SearchForm>
                <LogCont>
                    <MdLogout size={"1.5rem"} />
                </LogCont>
			</Right>
		</Header>
	);
};

export default Navbar;
