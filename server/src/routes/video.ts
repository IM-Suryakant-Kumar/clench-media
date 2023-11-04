import { Router } from "express";
import { addVideo, getCategories, getFilteredVideos, getSearchedVideos, getSingleVideo, getVideos } from "../controllers/video";
import { authenticateUser } from "../middlewares/authentication";

const router = Router();

router.route("/add-video").post(authenticateUser, addVideo);
router.route("/videos").get(getVideos);
router.route("/videos/:id").get(getSingleVideo);
router.route("/categories").get(getCategories);
router.route("/search").get(getSearchedVideos);
router.route("/filter").get(getFilteredVideos);

export default router;
