const { Types } = require("mongoose");
const dbClient = require("../utils/db");

class BookingController {
  static async bookAppointment(req, res) {
    const { doctorId, date, time } = req.body;
    const { userId } = req;

    if (!doctorId) return res.status(400).json({ message: "Missing doctorId" });
    if (!date) return res.status(400).json({ message: "Missing date" });
    if (!time) return res.status(400).json({ message: "Missing time" });

    // check if doctor exists
    const doctor = await dbClient.getSchemaOne(User, {
      _id: Types.ObjectId(doctorId),
    });
    if (!doctor) return res.status(400).json({ message: "Doctor not found" });

    // check if doctor is a doctor
    if (doctor.status.toLowerCase() !== "doctor")
      return res.status(400).json({ message: "Doctor not found" });

    // check if doctor is available
    const existingBooking = await dbClient.getSchemaOne(Booking, {
      doctorId: Types.ObjectId(doctorId),
      date,
      time,
    });
    if (existingBooking)
      return res.status(400).json({ message: "Doctor not available" });

    // book appointment
    try {
      await Booking.create({
        doctorId: Types.ObjectId(doctorId),
        patientId: Types.ObjectId(userId),
        date,
        time,
      });
      return res.status(201).json({ message: "Booking successful" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BookingController;
