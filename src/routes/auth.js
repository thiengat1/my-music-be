/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2022-01-26 23:28:57
 * @LastEditTime: 2022-01-26 23:45:33
 * @LastEditors: Lewis
 */
const authController = require("../app/controllers/AuthController");
const express = require("express");
const router = express.Router();

router.post('/signup',authController.signup)


module.exports = router;