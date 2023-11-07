import { ObjectId } from "mongoose";

export type Link = {
    slug: string;
    target: string;
    id: number;
    userId: ObjectId;
};
