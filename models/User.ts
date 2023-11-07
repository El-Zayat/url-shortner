import mongoose from "mongoose";
import { User } from "../types";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.methods.checkPassword = async (user: User, password: string) => {
    return bcrypt.compare(password, user.password);
};

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
