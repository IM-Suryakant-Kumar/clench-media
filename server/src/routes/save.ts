import { Router } from "express";
import { createSave, deleteFromSave, getAllSavedVideos } from "../controllers/save";

const router = Router();

router.route("/save").post(createSave).get(getAllSavedVideos);
router.route("/save/:videoId").delete(deleteFromSave);

export default router;
