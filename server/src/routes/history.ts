import { Router } from "express";
import { addToHistory, deleteFromHistory } from "../controllers/history";

const router = Router();

router.route("/history").post(addToHistory);
router.route("/history/:videoId").delete(deleteFromHistory);

export default router;
