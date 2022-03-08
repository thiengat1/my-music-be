/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-12 17:38:46
 * @LastEditTime: 2022-03-05 00:57:40
 * @LastEditors: Lewis
 */
const Music = require("../models/Music");
const { getUserInfo } = require("../middleware/authMiddleware");
class MusicController {
  //[GET] /music/top10
  getTop10(req, res, next) {
    try {
      Music.find({})
        .limit(10)
        .sort({'updatedAt': -1})
        .exec(function (err, musics) {
          if (!err) res.status(200).json(musics);
          else {
            res.status(400).json({ err: err });
          }
        });
    } catch (err) {
      next(err);
    }
  }
  //[GET] /music/:type
  showByType(req, res, next) {
    try {
      const type = req.params.type;
      let params = { type: type };
      if (type === "hot") {
        params = {};
      }
      Music.find(params)
      .sort({'updatedAt': -1})
      .exec(function (err, musics) {
        if (!err) res.status(200).json(musics);
        else {
          res.status(400).json({ err: err });
        }
      });
    } catch (err) {
      next(err);
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
      next(err);
    }
  }
  //[POST] /music/create
  async create(req, res, next) {
    try {
      const params = { ...req.body };
      params.author = (await getUserInfo(req)).username;
      const music = new Music(params);
      music.save();
      res.status(200).json({ data: true });
    } catch (err) {
      next(err);
    }
  }
  //[GET] /music/me
  async getMe(req, res, next) {
    try {
      const username = (await getUserInfo(req)).username;
      if(!username){
        res.status(200).json([])
      }
      Music.find({ author: username })
      .sort({'updatedAt': -1})
      .exec(function (err, musics) {
        if (!err) res.status(200).json(musics);
        else {
          res.status(400).json({ err: err });
        }
      });
    } catch (err) {
      next(err);
    }
  }
  //[GET] /music/search
  search(req, res, next) {
    try {
      const params = req.query.search;
      const userRegex = new RegExp(params, "i");
      Music.find({ name: userRegex }).exec(function (err, musics) {
        if (!err) res.status(200).json(musics);
        else {
          res.status(400).json({ err: err });
        }
      });
    } catch (err) {
      next();
    }
  }
}

module.exports = new MusicController();
