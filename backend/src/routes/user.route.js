const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authToken = require("../middlewares/tokenAuth");

router.route("/getDoctors").post(authToken, UserController.getDoctors);

module.exports = router;
