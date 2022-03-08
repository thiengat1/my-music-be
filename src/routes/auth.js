/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2022-01-26 23:28:57
 * @LastEditTime: 2022-02-13 00:02:11
 * @LastEditors: Lewis
 */
const authController = require("../app/controllers/AuthController");
const express = require("express");
const router = express.Router();

router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.post('/logout',authController.logout)


module.exports = router;