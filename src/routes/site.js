/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-12-11 23:37:12
 * @LastEditTime: 2021-12-11 23:49:08
 * @LastEditors: Lewis
 */
const siteController = require("../app/controllers/SiteController");
const express = require("express");
const router = express.Router();

router.get('/',siteController.index)

module.exports = router;
