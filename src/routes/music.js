/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-12-12 22:49:56
 * @LastEditTime: 2022-01-16 23:07:35
 * @LastEditors: Lewis
 */
const musicController = require("../app/controllers/MusicController");
const express = require("express");
const router = express.Router();


router.get('/top10',musicController.getTop10)
router.post('/create',musicController.create)
router.get('/:type',musicController.showByType)
router.get('/find/:videoId',musicController.findById)

module.exports = router;
