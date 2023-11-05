import { Router } from "express";
import { addToPlaylist, removeFromPlaylist } from "../controllers/playlist";

const router = Router();

router.route("/playlist").post(addToPlaylist).put(removeFromPlaylist);

export default router;
