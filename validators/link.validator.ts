import { check, param } from "express-validator";
import { handleValidationError } from "../helpers/handleValidationError";

export const shorten = [
    check("slug")
        .notEmpty()
        .withMessage("Slug is required")
        .bail()
        .custom(value => !/\s/.test(value))
        .withMessage("No spaces are allowed in the slug"),
    check("target")
        .notEmpty()
        .withMessage("Target is required")
        .bail()
        .isURL()
        .withMessage("Target must be a valid URL")
        .bail()
        .isLength({ max: 2048 })
        .withMessage("Target must be less than 2048 characters"),

    handleValidationError,
];

export const redirect = [
    param("slug").notEmpty().withMessage("Slug is required"),
    handleValidationError,
];
