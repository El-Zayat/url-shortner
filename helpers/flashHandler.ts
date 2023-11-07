import { RequestHandler } from "express";

export const flashHandler: RequestHandler = async (req, res, next) => {
    res.locals.flashed = {
        errors: req.flash("error"),
        warnings: req.flash("warning"),
        successes: req.flash("success"),
        auth: req.flash("auth"),
    };
    next();
};
