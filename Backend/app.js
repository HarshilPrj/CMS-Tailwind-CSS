require("dotenv").config();
require("./database/dbConfig");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const rootRouter = require("./rootRouter");

app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
    session({
        name: "Token",
        secret: process.env.JWT_SECKETY,
        resave: false,
        saveUninitialized: true,
        // cookie: {
        //     expires: 600000,
        // },
    })
);
app.use(express.json());
app.use(cors());
app.use(rootRouter);
app.use(morgan("dev"));

app.listen(process.env.PORT);
