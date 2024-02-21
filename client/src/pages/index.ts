export { default as Home, loader as homeLoader } from "./Home/Home";
export { default as Videos, loader as videosLoader } from "./Videos/Videos";
export {
	default as VideoDetails,
	loader as videoDetailsLoader,
} from "./VideoDetails/VideoDetails";
export { default as Like, loader as likeLoader } from "./Like/Like";
export {
	default as Playlist,
	loader as playlistLoader,
} from "./Playlist/Playlist";
export {
	default as PlaylistVideos,
	loader as playlistVideosLoader,
} from "./PlaylistVideos/PlaylistVideos";
export { default as Save, loader as saveLoader } from "./Save/Save";
export { default as History, loader as historyLoader } from "./History/History";
export {
	default as Login,
	loader as loginLoader,
	action as loginAction,
} from "./Auth/Login";
export {
	default as Signup,
	loader as signupLoader,
	action as signupAction,
} from "./Auth/Signup";

export * from "./common/Common.css";
