/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-26 23:29:13
 * @LastEditTime: 2022-03-08 22:47:50
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
  return jwt.sign({ id }, process.env.TOKEN_STRING, {
    expiresIn: maxAge
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
      res.status(200).json(user);
    } catch (err) {
      const errors = handleError(err);
      res.status(400).json(errors);
    }
  }
  //[POST] /user/login
  async login(req, res, next) {
    const { username, password } = req.body;
    try {
      const user = await User.login(username, password);
      const token = createToken(user._id);
      res.status(200).json({ token, username: user.username });
    } catch (err) {
      console.log("err", err);
      next(err)
      //res.status(400).json({ code: 400, message: err.toString() });
    }
  }
  //[POST] /user/logout
  logout(req, res, next) {
    const authHeader = req.headers["authorization"];
    jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
      if (logout) {
        res.send({ msg: "You have been Logged Out" });
      } else {
        res.send({ msg: "Error" });
      }
    });
  }
}

module.exports = new AuthController();
