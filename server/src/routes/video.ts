import { Router } from "express";
import { addVideo, getCategories, getVideoDetails, getVideos } from "../controllers/video";
import { authenticateUser } from "../middlewares/authentication";

const router = Router();

router.route("/videos").post(authenticateUser, addVideo).get(getVideos);
router.route("/videos/:id").get(authenticateUser, getVideoDetails);
router.route("/categories").get(getCategories);

export default router;
