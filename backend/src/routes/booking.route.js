const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/tokenAuth");

router.route("/appointment").post(authToken, BookingController.bookAppointment);
