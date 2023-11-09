import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
// loaders and actions
import Layout, { loader as layoutLoader } from "./components/Layout";
import Home, { loader as homeLoader } from "./pages/Home";
import Videos, { loader as videosLoader } from "./pages/Videos";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import Signup, { loader as signupLoader, action as signupAction } from "./pages/Signup";
import HostLayout, { loader as hostLayoutLoader } from "./components/HostLayout";
import VideoDetails, { loader as videoDetailsLoader } from "./pages/VideoDetails";
import Like, { loader as likeLoader } from "./pages/Like";
import Playlist, { loader as playlistLoader } from "./pages/Playlist";
import Save, { loader as saveLoader } from "./pages/Save";
import History, { loader as historyLoader } from "./pages/History";
import PlaylistVideos, { loader as playlistVideosLoader } from "./pages/PlaylistVideos";

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
				path="host"
				element={<HostLayout />}
				loader={hostLayoutLoader}
			>
				<Route
					path="videos"
					element={<Videos />}
					loader={videosLoader}
				/>
				<Route
					path="videos/:id"
					element={<VideoDetails />}
					loader={videoDetailsLoader}
				/>
				<Route
					path="like"
					element={<Like />}
					loader={likeLoader}
				/>
				<Route
					path="playlists"
					element={<Playlist />}
					loader={playlistLoader}
				/>
				<Route
					path="playlists/:name"
					element={<PlaylistVideos />}
					loader={playlistVideosLoader}
				/>
				<Route
					path="watchlater"
					element={<Save />}
					loader={saveLoader}
				/>
				<Route
					path="history"
					element={<History />}
					loader={historyLoader}
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
