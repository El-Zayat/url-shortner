import express, { ErrorRequestHandler } from "express";
import morgan from "morgan";
import linkRouter from "./routers/link.router";

// initialize express app & use morgan & json
const app = express();
app.use(morgan("tiny"));
app.use(express.json());

// initialize mongodb connection
import "./config/db";
import { errorHandler } from "./helpers/errorHandler";

// set view engine as ejs
app.set("view engine", "ejs");

// render the main view
app.get("/", (req, res) => res.render("."));

// use routers
app.use("/link", linkRouter);

// error handler
app.use(errorHandler);

// start the application
const port = 3000;
app.listen(port, () =>
    console.log("Listening on ==> http://localhost:" + port)
);
