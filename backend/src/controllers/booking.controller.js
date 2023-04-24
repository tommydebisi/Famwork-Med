const { Types } = require("mongoose");
const dbClient = require("../utils/db");
const User = require("../models/user");
const Booking = require("../models/booking");

class BookingController {
  static async bookAppointment(req, res) {
    const { doctorId, date, time } = req.body;
    const { userId } = req;

    if (!doctorId) return res.status(400).json({ message: "Missing doctorId" });
    if (!date) return res.status(400).json({ message: "Missing date" });
    if (!time) return res.status(400).json({ message: "Missing time" });

    // check if doctor exists
    const doctor = await dbClient.getSchemaOne(User, {
      _id: new Types.ObjectId(doctorId),
    });
    if (!doctor) return res.status(400).json({ message: "Doctor not found" });

    // check if doctor is a doctor
    if (doctor.status.toLowerCase() !== "doctor")
      return res.status(400).json({ message: "Doctor not found" });

    // check if doctor is available
    const existingBooking = await dbClient.getSchemaOne(Booking, {
      doctorId: new Types.ObjectId(doctorId),
      date,
      time,
    });
    if (existingBooking)
      return res.status(400).json({ message: "Doctor not available" });

    // book appointment
    try {
      await Booking.create({
        doctorId: new Types.ObjectId(doctorId),
        patientId: new Types.ObjectId(userId),
        date,
        time,
      });
      return res.status(201).json({ message: "Booking successful" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getBookings(req, res) {
    const { userId } = req;
    const { status } = req.query;

    if (!status) return res.status(400).json({ message: "Missing status" });

    // check if user exists
    const user = await dbClient.getSchemaOne(User, {
      _id: new Types.ObjectId(userId),
    });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.status.toLowerCase() !== status.toLowerCase()) {
      return res.status(400).json({ message: "Incorrect status" });
    }

    // get bookings
    try {
      const bookings = await dbClient.getSchemaMany(Booking, {
        patientId: new Types.ObjectId(userId),
        status,
      });
      return res.status(200).json({ firstName: user.firstName, bookings });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async cancelBooking(req, res) {
    const { bookingId } = req.params;
    const { userId } = req;

    // check if booking exists
    const booking = await dbClient.getSchemaOne(Booking, {
      _id: new Types.ObjectId(bookingId),
    });
    if (!booking) return res.status(400).json({ message: "Booking not found" });

    // check if booking belongs to user
    if (booking.patientId.toString() !== userId)
      return res.status(400).json({ message: "Booking not found" });

    // delete booking
    try {
      await dbClient.deleteSchemaOne(Booking, {
        _id: new Types.ObjectId(bookingId),
      });
      return res.status(200).json({ message: "Booking deleted" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BookingController;
