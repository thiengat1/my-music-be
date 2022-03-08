/*
 * @Description:
 * @Author: Lewis
 * @Date: 2022-01-26 23:12:50
 * @LastEditTime: 2022-02-11 23:17:16
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
    lowercase: true
  },
  password: {
    type: String,
    require: [true, "Please enter an password"],
    minLength: [6, "Minimum password length is 6"]
  }
});
User.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

User.statics.login = async function (username, password) {
  const user = await this.findOne({ username: username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};

module.exports = mongoose.model("User", User);
