import { Router } from "express";
import { addToHistory, deleteFromHistory, getAllHistoryVideos } from "../controllers/history";

const router = Router();

router.route("/history").post(addToHistory).get(getAllHistoryVideos);
router.route("/history/:videoId").delete(deleteFromHistory);

export default router;
