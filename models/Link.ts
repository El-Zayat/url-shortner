import mongoose from "mongoose";
import { Link } from "../types/Link";

const LinkSchema = new mongoose.Schema<Link>({
    slug: String,
    target: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

export default mongoose.model<Link>("Link", LinkSchema);
