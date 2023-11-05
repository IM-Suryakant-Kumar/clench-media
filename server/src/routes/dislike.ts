import { Router } from "express";
import { createDislike, deleteDislike } from "../controllers/dislike";

const router = Router();

router.route("/dislike").post(createDislike);
router.route("/dislike/:videoId").delete(deleteDislike);

export default router;
