import session from "express-session";
import { default as connectMongoDBSession } from "connect-mongodb-session";

const MongoDBStore = connectMongoDBSession(session);
let store = new MongoDBStore({
    uri: process.env.DATABASE_URL!,
    collection: "mySessions",
});

export const expressSessionConfig = {
    secret: "This is a secret",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
};
