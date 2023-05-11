const express = require("express");
const rootRouter = express.Router();
const pkg = require("./package.json");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

rootRouter.use(`/api/v${parseInt(pkg.version)}/users`, userRouter);
rootRouter.use(`/api/v${parseInt(pkg.version)}/products`, productRouter);

module.exports = rootRouter;
