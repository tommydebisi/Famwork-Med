const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const authToken = require('../middlewares/tokenAuth');

router.route('/register').post(AuthController.signUp)
router.route('/login').post(AuthController.signIn)
router.route('/logout').post(authToken, AuthController.logout)

module.exports = router;
