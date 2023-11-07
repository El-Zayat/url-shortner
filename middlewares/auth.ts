import { RequestHandler } from "express";

export const protectRoute: RequestHandler = (req, res, next) => {
    if (req.session && req.session.user) return next();
    return res.redirect("/login");
};

export const notLoggedIn: RequestHandler = (req, res, next) => {
    if (!req.session.user) return next();
    return res.redirect("/");
};
