import { Router } from "express";
import { addToPlaylist, getAllPlaylist, removeFromPlaylist } from "../controllers/playlist";

const router = Router();

router.route("/playlist").post(addToPlaylist).put(removeFromPlaylist).get(getAllPlaylist);

export default router;
