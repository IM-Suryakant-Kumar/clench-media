import { Form, LoaderFunctionArgs, redirect, useActionData, useNavigation } from "react-router-dom";
import { getLoggedInUser, register } from "../utils/api";
import { IRUser } from "../types/user";
import { Button, Container, Input, Message, SubTitle, Title } from "../styles/Signup.css";
import { Link } from "react-router-dom";

export const loader = async () => {
	const data = await getLoggedInUser();
	return data.success ? redirect("/") : null;
};

export const action = async ({ request }: LoaderFunctionArgs) => {
	const formData = await request.formData();
	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	const confPassword = formData.get("confpassword");

	if (password !== confPassword) return "password does not match";

	const data = await register({ name, email, password } as IRUser);
	return data.success ? redirect("/") : data.message;
};

const Signup = () => {
	const errorMessage = useActionData();
	const navigation = useNavigation();

	return (
		<Container>
			<Form
				method="post"
				className="signup-form"
				replace
			>
				<Title>Sign up</Title>
				{errorMessage ? <Message>{`${errorMessage}`}</Message> : ""}
				<Input
					type="name"
					name="name"
					placeholder="fullname"
                    required
				/>
				<Input
					type="email"
					name="email"
					placeholder="email"
                    required
				/>
				<Input
					type="password"
					name="password"
					placeholder="password"
                    required
				/>
				<Input
					type="text"
					name="confpassword"
					placeholder="confirm password"
                    required
				/>
				<Button
					type="submit"
					disabled={navigation.state === "submitting"}
				>
					{navigation.state === "submitting" ? "Signing up.." : "Sign up"}
				</Button>
				<SubTitle>
					already have an account? <Link to="/login">Login</Link>
				</SubTitle>
			</Form>
		</Container>
	);
};

export default Signup;
