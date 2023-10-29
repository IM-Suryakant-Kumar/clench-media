import { Router } from "express";
import { createUser, login, logout, test } from "../controllers/auth";

const router: Router = Router();

router.route("/").get(test)
router.route("/register").post(createUser);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
