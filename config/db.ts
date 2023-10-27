const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect(
        "mongodb+srv://zayat:32425262@vue-mongodb.dnlpi.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Connected to db.");
};

main().catch(err => console.log("Mongoose error: ", err));
