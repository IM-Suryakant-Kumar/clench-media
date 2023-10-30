import { Router } from "express";
import { authenticateUser } from "../middlewares/authentication";
import { getUser } from "../controllers/user";

const router: Router = Router();

router.route("/me").get(authenticateUser, getUser);

export default router;
