/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-11 22:37:23
 * @LastEditTime: 2022-03-09 15:15:05
 * @LastEditors: Lewis
 */
const path = require("path");
const express = require("express");
//const morgan = require("morgan");
const app = express();
const port = process.env.PORT||8080;
const http = require("http");
require('dotenv').config();

const { getOnComment } = require("./app/middleware/socket");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};

const route = require("./routes");
const db = require("./config/db");

//connect to Db
db.connect();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions)); // Use this after the variable declaration
//app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "./public")));

//routes init
route(app);


const server = http.createServer(app);

let io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");
  getOnComment(socket);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
