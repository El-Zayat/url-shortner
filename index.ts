import express from "express";
import morgan from "morgan";
import cors from "cors";
import linkRouter from "./routers/link.router";
import homeRouter from "./routers/home.router";
import connectFlash from "connect-flash";
import { errorHandler, flashHandler } from "./helpers";
import expressSession from "express-session";
import { expressSessionConfig, port } from "./config/conf";

// load environment variables
require("dotenv").config();

// initialize express application
const app = express();

// use middlewares
app.use(morgan("tiny")); // logging
app.use(cors()); // cors
app.use(express.urlencoded({ extended: false })); // body parser
app.use(express.json()); // json parser
app.use(expressSession(expressSessionConfig)); // express session
app.use(connectFlash()); // flash messages
app.use(express.static("./views")); // static files
app.use(flashHandler);

// set global variables
app.locals.baseURL = "http://localhost:" + port;

// initialize mongodb connection
import "./config/db";

// set view engine as ejs
app.set("view engine", "ejs");

// render the main view
app.use("/", homeRouter);

// use routers
app.use("/link", linkRouter);

// error handler
app.use(errorHandler);

// start the application
app.listen(port, () => console.log("Listening on => " + app.locals.baseURL));
