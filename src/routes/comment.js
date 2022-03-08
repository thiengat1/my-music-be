/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2022-02-24 23:17:11
 * @LastEditTime: 2022-02-25 00:19:13
 * @LastEditors: Lewis
 */
const commentController = require("../app/controllers/CommentController");
const express = require("express");
const router = express.Router();
//const { requireAuth } = require("../app/middleware/authMiddleware");

router.get("/find", commentController.getCommentById);
router.post("/save", commentController.saveComment);



module.exports = router;