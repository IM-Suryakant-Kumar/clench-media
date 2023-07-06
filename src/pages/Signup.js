import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css"

const Signup = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confPassword: ""
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<section className="centered-cont">
			<div className="login-signup-cont">
				<h1>Sign up</h1>
				<form>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="John Doe"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						placeholder="johndoe@gmail.com"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<label htmlFor="password">Create Password</label>
					<input
						type="password"
						placeholder="********"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<label htmlFor="conf-password">Confirm Password</label>
					<input
						type="password"
						placeholder="********"
						id="conf-password"
						name="confPassword"
						value={formData.confPassword}
						onChange={handleChange}
					/>
					<button type="submit" className="login-btn">
						Sign up
					</button>
					<p>
						Already have an account ?
						<Link to="/login" className="link">
							Login
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Signup;
