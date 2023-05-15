require("dotenv").config();
require("./database/dbConfig");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rootRouter = require("./rootRouter");

app.use(cookieParser({ history: true }));
app.use(express.json());
app.use(cors());
app.use(rootRouter);
app.use(morgan("dev"));

app.listen(process.env.PORT);
