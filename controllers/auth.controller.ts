import { RequestHandler } from "express";
import UserModel from "../models/User";
import bcrypt from "bcrypt";

export const register: RequestHandler = async (req, res, next) => {
    try {
        let user = await UserModel.findOne({ username: req.body.username });
        if (user) next({ status: 404, msg: ["Username already exists"] });

        req.body.password = bcrypt.hashSync(req.body.password, 10);
        let newUser = await UserModel.create(req.body);
        req.session.user = newUser;

        res.redirect("/");
    } catch (error) {
        next();
    }
};

export const login: RequestHandler = async (req, res, next) => {
    try {
        let user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            req.flash("auth", "Invalid username or password");
            return res.redirect("/login");
        }

        let valid = bcrypt.compareSync(req.body.password, user.password);
        if (!valid) {
            req.flash("auth", "Invalid username or password");
            return res.redirect("/login");
        }

        req.session.user = user;
        res.redirect("/");
    } catch (error) {
        next();
    }
};

export const logout: RequestHandler = (req, res, next) => {
    try {
        req.session.destroy(() => {
            res.redirect("/");
        });
    } catch (error) {
        next({
            status: 500,
            msg: ["Something went wrong, please try again later"],
        });
    }
};
