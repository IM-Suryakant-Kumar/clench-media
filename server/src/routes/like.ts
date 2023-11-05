import { Router } from "express";
import { createLike, deleteLike } from "../controllers/like";

const router = Router();

router.route("/like").post(createLike).delete(deleteLike);

export default router;
