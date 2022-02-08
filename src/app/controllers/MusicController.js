/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-12 17:38:46
 * @LastEditTime: 2022-01-16 23:07:06
 * @LastEditors: Lewis
 */
const Music = require("../models/Music");
class MusicController {
  //[GET] /music/top10
  getTop10(req, res, next) {
    try {
      Music.find({})
        .limit(10)
        .exec(function (err, musics) {
          if (!err) res.status(200).json(musics);
          else {
            res.status(400).json({ err: err });
          }
        });
    } catch (err) {
      next();
    }
  }
   //[GET] /music/:type
  showByType(req, res, next) {
    try {
      const type = req.params.type;
      Music.find({ type: type }).exec(function (err, musics) {
        if (!err) res.status(200).json(musics);
        else {
          res.status(400).json({ err: err });
        }
      });
    } catch (err) {
      next();
    }
  }
   //[GET] /music/find/:videoId
  findById(req, res, next) {
    try {
      const videoId = req.params.videoId;
      Music.findOne({ videoId: videoId }).exec(function (err, musics) {
        if (!err) res.status(200).json(musics);
        else {
          res.status(400).json({ err: err });
        }
      });
    } catch (err) {
      next();
    }
  }
  //[POST] /music/create
  create(req, res, next) {
    try {
      const music = new Music(req.body);
      music.save();
      res.status(200).json({ data: true });
    } catch (err) {
      next();
    }
  }
}

module.exports = new MusicController();
