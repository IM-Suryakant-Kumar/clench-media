import {
	Form,
	LoaderFunctionArgs,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import {
	Button,
	Container,
	GuestButton,
	Input,
	Message,
	SubTitle,
	Title,
} from "../styles/Login.css";
import { getLoggedInUser, guestLogin, login } from "../utils/api";
import { ILUser, User } from "../types/user";
import { Link } from "react-router-dom";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const res = await getLoggedInUser();
	return res.success ? redirect("/") : new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }: LoaderFunctionArgs) => {
	const formData = await request?.formData();
	const email = formData?.get("email");
	const password = formData?.get("password");
	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";

	const data = await login({ email, password } as ILUser);
	return data.success ? redirect(pathname) : data.message;
};

const Login = () => {
	const message = useLoaderData();
	const errorMessage = useActionData();
	const navigation = useNavigation();
	const navigate = useNavigate();

	const handleGuestLogin = async () => {
		await guestLogin();
		navigate("/", { replace: true });
	};

	return (
		<Container>
			<Form
				method="post"
				className="login-form"
				replace
			>
				<Title>Sign in</Title>
				{message ? <Message>{`${message}`}</Message> : ""}
				{errorMessage ? <Message>{`${errorMessage}`}</Message> : ""}
				<Input
					type="email"
					name="email"
					placeholder="email"
				/>
				<Input
					type="password"
					name="password"
					placeholder="password"
				/>
				<Button
					type="submit"
					disabled={navigation.state === "submitting"}
				>
					{navigation.state === "submitting" ? "Loggin in.." : "Log in"}
				</Button>
				<GuestButton
					type="button"
					onClick={handleGuestLogin}
				>
					Guest Login
				</GuestButton>

				<SubTitle>
					Don't have an account? <Link to="/signup">Signup</Link>
				</SubTitle>
			</Form>
		</Container>
	);
};

export default Login;
