import {
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
	SForm,
	Title,
	Wrapper,
} from "../styles/Login.css";
import { getLoggedInUser, guestLogin, login } from "../utils/api";
import { ILUser, User } from "../types/user";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const res = await getLoggedInUser();
	return res.success ? redirect("/") : new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }: LoaderFunctionArgs) => {
	const formData = await request?.formData();
	const email = formData?.get("email");
	const password = formData?.get("password");
	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";

	try {
		await login({ email, password } as ILUser);
		return redirect(pathname);
	} catch (error) {
		return error?.message;
	}
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
			{/* <Wrapper> */}
			<SForm
				method="post"
				replace
			>
				<Title>Sign in</Title>
				{/* {message && <Message>{message}</Message>}
                    {errorMessage && <Message>{errorMessage}</Message>} */}
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
			</SForm>
			{/* </Wrapper> */}
		</Container>
	);
};

export default Login;
