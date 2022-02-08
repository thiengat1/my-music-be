/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-26 23:29:13
 * @LastEditTime: 2022-02-06 23:39:21
 * @LastEditors: Lewis
 */
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleError = (err) => {
  let errors = { code: err.code, message: "" };
  console.log("err.code", err.code);
  if (err.code === 11000) {
    errors.message = "User is already registered";
  } else {
    Object.values(err.errors).forEach((error) => {
      const { path, message } = error.properties;
      errors.message = `${path}:${message}`;
    });
  }
  return errors;
};
const maxAge = 4 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "lewis secret string", {
    expiresIn: maxAge,
  });
};

class AuthController {
  //[POST] /user/signup

  async signup(req, res, next) {
    const { username, password } = req.body;
    console.log("req.body", req.body);
    try {
      const user = await User.create({ username, password });
      const token = createToken(user._id);
      console.log("token", token);
      res.status(200).json(user);
    } catch (err) {
      handleError(err);
      res.status(400).json({ err: "create user error" });
    }
  }
  async login(req, res, next) {
    const { username, password } = req.body;
    console.log("req.body", req.body);
    try {
      const user = await User.create({ username, password });
      const token = createToken(user._id);
      console.log("token", token);
      res.status(200).json(token);
    } catch (err) {
      handleError(err);
      res.status(400).json({ err: "create user error" });
    }
  }
}

module.exports = new AuthController();
