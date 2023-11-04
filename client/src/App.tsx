import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
// loaders and actions
import { loader as layoutLoader } from "./components/Layout";
import { loader as homeLoader } from "./pages/Home";
import { loader as loginLoader } from "./pages/Login";
import { action as loginAction } from "./pages/Login";
import { loader as signupLoader } from "./pages/Signup";
import { action as signupAction } from "./pages/Signup";
import { loader as hostLayoutLoader } from "./components/HostLayout";
import Signup from "./pages/Signup";
import HostLayout from "./components/HostLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
			loader={layoutLoader}
		>
			<Route
				index
				element={<Home />}
				loader={homeLoader}
			/>
			<Route
				path="videos"
				element={<h1>Videos</h1>}
			/>
			<Route
				path="videos/:id"
				element={<h1>Video details</h1>}
			/>
			<Route
				path="host"
				element={<HostLayout />}
				loader={hostLayoutLoader}
			>
				<Route
					index
					element={<h1>Liked</h1>}
				/>
				<Route
					path="playlists"
					element={<h1>playlist</h1>}
				/>
				<Route
					path="watchlater"
					element={<h1>watch later</h1>}
				/>
				<Route
					path="history"
					element={<h1>History</h1>}
				/>
			</Route>
			<Route
				path="/login"
				element={<Login />}
				loader={loginLoader}
				action={loginAction}
			/>
			<Route
				path="/signup"
				element={<Signup />}
				loader={signupLoader}
				action={signupAction}
			/>
			<Route
				path="*"
				element={<h3>404 - PAGE NOT FOUND!</h3>}
			/>
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
