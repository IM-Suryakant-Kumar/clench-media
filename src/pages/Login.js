import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleGuestLogin = (e) => {
		setFormData((prevData) => ({
			...prevData,
			email: "johndoe@gmail.com",
			password: "johndoe123"
		}));
	};

	return (
		<section className="centered-cont">
			<div className="login-cont">
				<h1>Sign in</h1>
				<form>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="johndoe@gmail.com"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="*********"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<button type="submit" className="login-btn">
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
						<Link to="/signup" className="link">
							Signup
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Login;
