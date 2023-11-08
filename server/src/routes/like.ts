import { Router } from "express";
import { createLike, deleteLike, getAllLikedVideos } from "../controllers/like";

const router = Router();

router.route("/like").post(createLike).get(getAllLikedVideos);
router.route("/like/:videoId").delete(deleteLike);

export default router;
