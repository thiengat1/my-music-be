/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-12 17:38:46
 * @LastEditTime: 2022-03-05 23:03:26
 * @LastEditors: Lewis
 */
const Comment = require("../models/Comment");
class CommentController {
  //[GET] /comment/find
  getCommentById(req, res, next) {
    try {
      const params = req.query.videoId;
      Comment.find({ videoId: params })
      .sort({'updatedAt': -1})
      .exec(function (err, comments) {
        if (!err) res.status(200).json(comments);
        else {
          res.status(400).json({ err: err });
        }
      });
    } catch (err) {
      next(err);
    }
  }
    //[POST] /comment/save
    saveComment(req, res, next) {
      try {
        const params = { ...req.body };
        const comment = new Comment(params);
        console.log('comment',comment);
        comment.save();
        res.status(200).json({ data: true });
      } catch (err) {
        next(err);
      }
    }
}

module.exports = new CommentController();
