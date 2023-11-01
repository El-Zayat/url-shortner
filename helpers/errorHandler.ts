import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    err.status = err.status || 500;
    err.msg = err.msg || ["Server Error"];
    req.flash("error", err.msg);
    res.redirect("back");
};
