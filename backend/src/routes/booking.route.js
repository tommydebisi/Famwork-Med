const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/tokenAuth");
const BookingController = require("../controllers/booking.controller");

router.route("/appointment").post(authToken, BookingController.bookAppointment);
router.route("/list").get(authToken, BookingController.getBookings);
router.route("/cancel/{id}").delete(authToken, BookingController.cancelBooking);

module.exports = router;
