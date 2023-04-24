const dbClient = require("../utils/db");
const { Types } = require("mongoose");

class UserController {
  static async getDoctors(req, res) {
    const doctors = dbClient.filterSchemaByAttribute(
      {status: "Doctor"},
      {name: 1, experience: 1}
    );

    if (!doctors) return res.status(400).json({ message: "Doctor not found" });
    res.status(200).json({ doctors });
  }
}

module.exports = UserController;
