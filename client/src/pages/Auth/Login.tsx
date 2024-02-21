import {
  Link,
	Form,
	LoaderFunctionArgs,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
	useOutletContext,
	useSearchParams,
} from "react-router-dom";
import {
	Button,
	Container,
	GuestButton,
	Input,
	Message,
	SubTitle,
	Title,
} from "./Login.css";
import { getLoggedInUser, guestLogin, login } from "../../utils";
import { ILUser, User } from "../../types";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const res = await getLoggedInUser();
	return res.success
		? redirect("/")
		: new URL(request.url).searchParams.get("message");
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
	const message = useLoaderData() as string;
	const errorMessage = useActionData() as string;
	const navigation = useNavigation();
	const [setUser]: React.Dispatch<React.SetStateAction<User | null>>[] =
		useOutletContext();
	const [searchParams] = useSearchParams();
	const pathname = searchParams.get("redirectTo") || "/";

	const navigate = useNavigate();

	const handleGuestLogin = async () => {
		await guestLogin();
		const { user } = await getLoggedInUser();
		// console.log(user)
		setUser(user);
		navigate(pathname);
	};

	return (
		<Container>
			<Form method="post" className="login-form" replace>
				<Title>Sign in</Title>
				{message && <Message>{`${message}`}</Message>}
				{errorMessage && <Message>{`${errorMessage}`}</Message>}
				<Input type="email" name="email" placeholder="email" />
				<Input type="password" name="password" placeholder="password" />
				<Button type="submit" disabled={navigation.state === "submitting"}>
					{navigation.state === "submitting" ? "Loggin in.." : "Log in"}
				</Button>
				<GuestButton type="button" onClick={handleGuestLogin}>
					Guest Login
				</GuestButton>

				<SubTitle>
					Don't have an account?{" "}
					<Link to={`/signup?redirectTo=${pathname}`}>Signup</Link>
				</SubTitle>
			</Form>
		</Container>
	);
};

export default Login;
