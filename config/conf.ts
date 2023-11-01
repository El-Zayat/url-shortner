export const port = process.env.PORT || 3000;

export const expressSessionConfig = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
};
