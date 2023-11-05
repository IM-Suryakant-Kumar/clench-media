import { Router } from "express";
import { createSave, deleteFromSave } from "../controllers/save";

const router = Router();

router.route("/save").post(createSave);
router.route("/save/:videoId").delete(deleteFromSave);

export default router;
