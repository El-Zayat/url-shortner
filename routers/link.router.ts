import { Router } from "express";
import * as ctrl from "../controllers/link.controller";
import * as validator from "../validators/link.validator";
import { protectRoute } from "../middlewares/auth";

const router = Router();

router.get("/", (req, res) => res.redirect("/"));
router.get("/:slug", validator.redirect, ctrl.redirect);
router.post("/", validator.shorten, protectRoute, ctrl.shorten);

export default router;
