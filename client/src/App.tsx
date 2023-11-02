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
import { loader as loginAction } from "./pages/Login";
import Signup from "./pages/Signup";

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
                path="liked"
                element={<h1>Liked</h1>}
            />
            <Route 
                path="playlists"
                element={<h1>playlist</h1>}
            />
            <Route 
                path="watch-later"
                element={<h1>watch later</h1>}
            />
            <Route 
                path="history"
                element={<h1>History</h1>}
            />
			<Route
				path="/login"
				element={<Login />}
                loader={loginLoader}
                action={loginAction}
			/>
			<Route
				path="/signup"
				element={<Signup />}
			/>
            <Route path="*" element={<h3>404 - PAGE NOT FOUND!</h3>} />
		</Route>,
	),
);

const App = () => <RouterProvider router={router} />;

export default App;
