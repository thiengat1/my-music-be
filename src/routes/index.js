/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-11 23:24:30
 * @LastEditTime: 2022-02-25 00:18:17
 * @LastEditors: Lewis
 */
const siteRouter = require("./site");
const musicRouter = require("./music");
const authRouter = require("./auth");
const commentRouter = require("./comment");
function route(app) {
  app.use("/", siteRouter);
  app.use("/music", musicRouter);
  app.use("/user", authRouter);
  app.use("/comment", commentRouter);
}

module.exports = route;
