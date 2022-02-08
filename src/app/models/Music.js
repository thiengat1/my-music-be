/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-12 12:15:30
 * @LastEditTime: 2022-01-11 23:23:03
 * @LastEditors: Lewis
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Music = new Schema(
  {
    author: { type: String },
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    type: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Music", Music);
