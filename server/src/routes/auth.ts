import { Router } from "express";
import { createUser, getUser, login, logout, test } from "../controllers/auth";
import { authenticateUser } from "../middlewares/authentication";

const router: Router = Router();

router.route("/").get(test);
router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/logout").get(authenticateUser, logout);
router.route("/me").get(authenticateUser, getUser);

export default router;
