import { Router } from "express";
import LinkModel from "../models/Link";

const router = Router();

router.get("/", async (req, res, next) => {
    try {
        let links = await LinkModel.find();
        res.render("index", { links });
    } catch (err) {
        next({ msg: "Server Error" });
    }
});

export default router;
