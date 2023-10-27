import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    err.status = err.status || 500;
    err.msg = err.msg || ["Server Error"];
    res.status(err.status).json({
        status: err.status,
        msg: err.msg,
    });
};
