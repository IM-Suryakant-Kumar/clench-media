import { Router } from "express";
import { createUser, guestLogin, login, logout, test } from "../controllers/auth";
import { authenticateUser } from "../middlewares/authentication";

const router: Router = Router();

router.route("/").get(test);
router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/guest-login").get(guestLogin);
router.route("/logout").get(authenticateUser, logout);

export default router;
