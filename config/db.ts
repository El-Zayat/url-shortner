const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect(
        "mongodb+srv://zayat:32425262@vue-mongodb.dnlpi.mongodb.net/url-shorner"
    );

    console.log("Connected to db.");
};

main().catch(err => console.log("Mongoose error: ", err));
