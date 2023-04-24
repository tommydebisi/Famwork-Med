const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authToken = require("../middlewares/tokenAuth");

router.route("/getDoctors").get(authToken, UserController.getDoctors);

module.exports = router;
