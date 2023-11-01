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
	Login,
} from "../styles/Navbar.css";
import LogoImg from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch, MdLogout, MdLogin } from "react-icons/md";
import { useMemo, useState } from "react";
import { debounce } from "../utils/debounce";
import { logout } from "../utils/api";
import { User } from "../types/user";

type Props = {
	user: User;
};

const Navbar: React.FC<Props> = ({ user }) => {
	const [seacrhText, setSeacrhText] = useState<string>();
	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/videos");
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSeacrhText(e.target.value.toLowerCase());
	};

	/* eslint-disable react-hooks/exhaustive-deps */
	const debounceChangeHandler = useMemo(() => debounce(changeHandler, 1000), [seacrhText]);

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
						onChange={debounceChangeHandler}
					/>
					<Button type="submit">
						<MdSearch size={"1rem"} />
					</Button>
				</SearchForm>
				{user ? (
					<LogCont onClick={logout}>
						<MdLogout size={"1.5rem"} />
					</LogCont>
				) : (
					<Login onClick={() => navigate("/login")}>
						<MdLogin size={"1.5rem"} />
					</Login>
				)}
			</Right>
		</Header>
	);
};

export default Navbar;
