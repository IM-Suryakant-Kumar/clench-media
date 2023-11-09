import { Router } from "express";
import { addToPlaylist, getAllPlaylist, getPlaylistVideos, removeFromPlaylist } from "../controllers/playlist";

const router = Router();

router.route("/playlist").post(addToPlaylist).put(removeFromPlaylist).get(getAllPlaylist);
router.route("/playlist/:name").get(getPlaylistVideos);

export default router;
