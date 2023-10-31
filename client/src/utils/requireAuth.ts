import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getLoggedInUser } from "./api";

export const requireAuth = async ({ request }: LoaderFunctionArgs) => {
	const pathname = new URL(request.url).pathname;

	const user = await getLoggedInUser();

	if (!user.email) throw redirect(`/login?message=You must login first&redirectTo=${pathname}`);

	return user;
};
