import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import {
	HostLayout,
	Layout,
	hostLayoutLoader,
	layoutLoader,
} from "./components";
import {
	History,
	Home,
	Like,
	Login,
	Playlist,
	PlaylistVideos,
	Save,
	Signup,
	VideoDetails,
	Videos,
	historyLoader,
	homeLoader,
	likeLoader,
	loginAction,
	loginLoader,
	playlistLoader,
	playlistVideosLoader,
	saveLoader,
	signupAction,
	signupLoader,
	videoDetailsLoader,
	videosLoader,
} from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />} loader={layoutLoader}>
			<Route index element={<Home />} loader={homeLoader} />
			<Route path="host" element={<HostLayout />} loader={hostLayoutLoader}>
				<Route path="videos" element={<Videos />} loader={videosLoader} />
				<Route
					path="videos/:id"
					element={<VideoDetails />}
					loader={videoDetailsLoader}
				/>
				<Route path="like" element={<Like />} loader={likeLoader} />
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
				<Route path="watchlater" element={<Save />} loader={saveLoader} />
				<Route path="history" element={<History />} loader={historyLoader} />
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
				element={
					<h3
						style={{
							minHeight: "80vh",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "large",
							color: "gray",
						}}>
						404 - PAGE NOT FOUND!
					</h3>
				}
			/>
		</Route>
	)
);

const App = () => <RouterProvider router={router} />;

export default App;
