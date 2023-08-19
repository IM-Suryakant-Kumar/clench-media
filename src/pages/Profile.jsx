import React from "react";
import "../styles/profile.css";
import ProfileImg from "../images/profile.png";

const Profile = () => {
	return (
		<div className="profile-cont">
			<img src={ProfileImg} alt="profile_pic" />
			<h2>Name: John Doe</h2>
			<h2>Gender: Male</h2>
		</div>
	);
};

export default Profile;
