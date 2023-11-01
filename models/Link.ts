import mongoose from "mongoose";
import { Link } from "../types/Link";

const LinkSchema = new mongoose.Schema<Link>({
    slug: String,
    target: String,
});

export default mongoose.model<Link>("Link", LinkSchema);
