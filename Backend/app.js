require("dotenv").config();
require("./database/dbConfig");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rootRouter = require("./rootRouter");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser({ history: true }));
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    })
);
app.use(express.json());
app.use(rootRouter);
app.use(morgan("dev"));

app.listen(process.env.PORT);
