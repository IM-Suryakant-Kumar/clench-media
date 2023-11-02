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
                path="videos"
                element={<h1>Videos</h1>}
            />
            <Route 
                path="video/:id"
                element={<h1>Video details</h1>}
            />
			<Route
				path="/login"
				element={<LoginSignup />}
			/>
            <Route path="*" element={<h3>404 - PAGE NOT FOUND!</h3>} />
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
