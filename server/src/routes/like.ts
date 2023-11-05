import { Router } from "express";
import { createLike, deleteLike } from "../controllers/like";

const router = Router();

router.route("/like").post(createLike);
router.route("/like/:videoId").delete(deleteLike);

export default router;
