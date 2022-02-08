/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-12 11:56:48
 * @LastEditTime: 2021-12-12 12:01:36
 * @LastEditors: Lewis
 */

const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/my_music_dev");
    console.log('connect successfully');
  } catch (err) {
    console.log('connect fail');
  }
}

module.exports = { connect };
