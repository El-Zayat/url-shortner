import { Router } from "express";
import LinkModel from "../models/Link";
import { protectRoute } from "../middlewares/auth";
import * as authCtrl from "../controllers/auth.controller";

const router = Router();

router.get("/", protectRoute, async (req, res, next) => {
    try {
        let links = await LinkModel.find({ userId: req.session.user!._id });
        res.render("index", { links, user: req.session.user });
    } catch (err) {
        next({ msg: "Server Error" });
    }
});

router.all("/logout", authCtrl.logout);

export default router;
