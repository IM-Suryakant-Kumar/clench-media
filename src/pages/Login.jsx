import React, { useState } from "react";
import { Link, Form, useSearchParams } from "react-router-dom";
import "../styles/login.css";

export async function action(obj) {
    console.log(obj)    
    return null
}

const Login = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleGuestLogin = (e) => {
		setSearchParams({
			email: "john@gmail.com",
			password: 123456
		});
	};

	return (
		<section className="centered-cont">
			<div className="login-cont">
				<h1>Sign in</h1>
				<Form method="post">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="johndoe@gmail.com"
						id="email"
						name="email"
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="*********"
						id="password"
						name="password"
					/>
					<button
						type="submit"
						className="login-btn"
					>
						Log in
					</button>
					<button
						type="button"
						className="guest-btn"
						onClick={handleGuestLogin}
					>
						Guest Login
					</button>
					<p>
						Don't have an account ?
						<Link
							to="/signup"
							className="link"
						>
							Signup
						</Link>
					</p>
				</Form>
			</div>
		</section>
	);
};

export default Login;
