import express from "express";
import morgan from "morgan";

// Initialize express app & use morgan & json
const app = express();
app.use(morgan("tiny"));
app.use(express.json());

// Initialize mongodb connection
import "./config/db";

// Start the application
const port = 3000;
app.listen(port, () =>
    console.log("Listening on ==> http://localhost:" + port)
);
