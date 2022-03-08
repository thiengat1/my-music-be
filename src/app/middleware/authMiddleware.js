/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-02-12 23:20:05
 * @LastEditTime: 2022-03-08 22:40:49
 * @LastEditors: Lewis
 */
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.TOKEN_STRING, (err, decodedToken) => {
      if (err) {
        console.log("err", err);
        res.status(401).json({ code: 401, message: "Unauthorized" });
      } else {
        console.log("decodedToken", decodedToken);
        next();
      }
    });
  } else {
    res.status(401).json({ code: 401, message: "Unauthorized" });
  }
};

const getUserInfo = async(req) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.TOKEN_STRING);
    const user= await User.findOne({_id:decoded.id})
    console.log("user", user);
    return user;
  }
  return null;
};

module.exports = { requireAuth, getUserInfo };
