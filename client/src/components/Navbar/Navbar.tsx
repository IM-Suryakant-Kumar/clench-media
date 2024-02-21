import {
	Link,
	useLocation,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
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
} from "./Navbar.css";
import LogoImg from "../../assets/logo.svg";
import { MdSearch, MdLogout, MdLogin } from "react-icons/md";
import React, { useMemo } from "react";
import { User } from "../../types";
import { debounce, logout } from "../../utils";

type Props = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const Navbar: React.FC<Props> = ({ user, setUser }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchText = searchParams.get("search") as string;
	const { pathname } = useLocation();
	const navigate = useNavigate();

	// console.log(user)

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`/host/videos?search=${searchText}`);
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (pathname !== "/host/videos") {
			let newPathname: string = "/host/videos";
			value && (newPathname += `?search=${value}`);
			navigate(newPathname);
		} else {
			setSearchParams(prevParams => {
				value ? prevParams.set("search", value) : prevParams.delete("search");
				return prevParams;
			});
		}
	};

	const debounceChangeHandler = useMemo(
		() => debounce(changeHandler, 1000),
		[searchText]
	);

	const handleLogout = async () => {
		await logout();
		setUser(null);
		navigate("/");
	};

	return (
		<Header>
			<Left>
				<Logo src={LogoImg} alt="logo" />
				<Link to="/">
					<LogoText>ClenchMedia</LogoText>
				</Link>
			</Left>
			<Right>
				<SearchForm onSubmit={handleSearch}>
					<Input
						defaultValue={searchText}
						type="search"
						placeholder="search"
						onChange={debounceChangeHandler}
					/>
					<Button type="submit">
						<MdSearch size={"1rem"} />
					</Button>
				</SearchForm>
				{user ? (
					<LogCont onClick={handleLogout}>
						<MdLogout size={"1.5rem"} />
					</LogCont>
				) : (
					<LogCont onClick={() => navigate("/login")}>
						<MdLogin size={"1.5rem"} />
					</LogCont>
				)}
			</Right>
		</Header>
	);
};

export default Navbar;
