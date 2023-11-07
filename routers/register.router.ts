import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { notLoggedIn } from "../middlewares/auth";
const router = Router();

router.get("/", notLoggedIn, (req, res) => res.render("register"));
router.post("/", notLoggedIn, authCtrl.register);

export default router;
