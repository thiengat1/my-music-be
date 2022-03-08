/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2022-02-24 00:01:09
 * @LastEditTime: 2022-02-25 00:49:25
 * @LastEditors: Lewis
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Comment = new Schema(
  {
    username: { type: String },
    videoId: { type: String },
    comment: { type: String },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", Comment);
