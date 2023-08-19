import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";
import { Layout } from "./components";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login, { action as loginAction } from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="/profile"
				element={<Profile />}
			/>
			<Route
				path="/login"
				element={<Login />}
                action={loginAction}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
