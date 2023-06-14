require("dotenv").config();
require("./database/dbConfig");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rootRouter = require("./rootRouter");
const http = require("http");
const socketio = require("socket.io");
const errorHandler = require("./middleware/errorHandling");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
    },
});

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

io.on("connection", (socket) => {
    global.socket = socket.id;
    socket.on("create-user", (data) => {
        console.log({ data });
    });
});
app.use(errorHandler);

server.listen(process.env.PORT);
