/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-12 22:49:56
 * @LastEditTime: 2022-02-17 23:46:59
 * @LastEditors: Lewis
 */
const musicController = require("../app/controllers/MusicController");
const express = require("express");
const router = express.Router();
//const { requireAuth } = require("../app/middleware/authMiddleware");

router.get("/top10", musicController.getTop10);
router.get("/me", musicController.getMe);
router.get("/search", musicController.search);
router.post("/create", musicController.create);
router.get("/:type", musicController.showByType);
router.get("/find/:videoId", musicController.findById);


module.exports = router;
