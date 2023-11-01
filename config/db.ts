import mongoose from "mongoose";

const main = async () => {
    await mongoose.connect(process.env.DATABASE_URL as string);

    console.log("Connected to db.");
};

main().catch(err => console.log("Mongoose error: ", err));
