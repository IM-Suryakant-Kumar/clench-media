import { Router } from "express";
import { createDislike, deleteDislike } from "../controllers/dislike";

const router = Router();

router.route("/dislike").post(createDislike).delete(deleteDislike);

export default router;
