/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-26 23:12:50
 * @LastEditTime: 2022-02-06 23:52:33
 * @LastEditors: Lewis
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bcrypt = require("bcrypt");

const User = new Schema({
  username: {
    type: String,
    require: [true, "Please enter an username"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: [true, "Please enter an password"],
    minLength: [6, "Minimum password length is 6"],
  },
});
User.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

User.static.login = async function (username, password) {
  const user = await User.this.findOne({ username: username });
  
};

module.exports = mongoose.model("User", User);
