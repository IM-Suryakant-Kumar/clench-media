import { User } from "../types/user";

export const addUserToLocalStorage = (user: User) => {
	localStorage.setItem("user", JSON.stringify(user));
};

export const removedUserFromLocalStorage = () => {
	localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
	const user = localStorage.getItem("user") as string;
	return JSON.parse(user);
};
