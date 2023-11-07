import { ObjectId } from "mongoose";
import { Link } from "./Link";

export type User = {
    _id: ObjectId;
    name: string;
    username: string;
    password: string;
    links: Link[];
};
