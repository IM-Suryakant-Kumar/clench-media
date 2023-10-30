import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
// loaders
import { loader as layoutLoader } from "./components/Layout";
import { loader as homeLoader } from "./pages/Home";

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
				path="/login"
				element={<LoginSignup />}
			/>
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
