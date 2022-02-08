/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-11 23:24:30
 * @LastEditTime: 2022-01-26 23:46:22
 * @LastEditors: Lewis
 */
const siteRouter = require("./site");
const musicRouter = require("./music");
const authRouter = require("./auth");
function route(app) {
  app.use("/", siteRouter);
  app.use("/music", musicRouter);
  app.use("/user", authRouter);
}

module.exports = route;
