import { RequestHandler } from "express";
import LinkModel from "../models/Link";

export const redirect: RequestHandler = async (req, res, next) => {
    try {
        let { slug } = req.params;
        slug = slug.toLocaleLowerCase();
        let link = await LinkModel.findOne({ slug });
        if (!link) return next({ status: 400, msg: ["Slug does not exist!"] });
        res.redirect(link.target);
    } catch (error) {
        next(error);
    }
};

export const shorten: RequestHandler = async (req, res, next) => {
    try {
        req.body.slug = req.body.slug.toLocaleLowerCase();
        let { slug } = req.body;
        let link = await LinkModel.findOne({ slug });
        if (link) return next({ status: 400, msg: ["Slug is already used!"] });

        link = await LinkModel.create(req.body);
        res.status(200).json(link);
    } catch (e) {
        next(e);
    }
};
