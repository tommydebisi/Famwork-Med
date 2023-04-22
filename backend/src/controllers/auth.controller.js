const { compare } = require("bcrypt");
const { v4 } = require('uuid');
const { Types } = require("mongoose");
const dbClient = require("../utils/db");
const redisClient = require("../utils/redis");
const User = require("../models/user");
const createUserSchema = require("../validators/validate");
const { hashPassword } = require("../utils/helper");

class AuthController {
  static async signUp(req, res) {
    const { username, email, password } = req.body;

    if (!username) return res.status(400).json({ message: "Missing username" });
    if (!email) return res.status(400).json({ message: "Missing email" });
    if (!password) return res.status(400).json({ message: "Missing password" });

    // validate email and password meets criteria
    try {
      await createUserSchema.validateAsync({ email, password });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }

    // Check if user already exists
    const existingUser = await dbClient.getSchemaOne(User, { email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashed_password = await hashPassword(password);
    try {
      // Create a new user
      await User.create({ username, email, hashed_password });

      return res.status(201).json({ message: "success" });
    } catch (error) {
      // implement logger here
      return res.status(400).json({ message: error.message });
    }
  }

  static async signIn(req, res) {
    const { email, password } = req.body;

    // check if email and password is present
    if (!email) return res.status(400).json({ message: "Missing email" });
    if (!password) return res.status(400).json({ message: "Missing password" });

    const user = await dbClient.getSchemaOne(User, { email });
    if (!user || !(await compare(password, user.hashed_password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // create new token for the current user
    const accessToken = v4();

    // save access token in redis for 12hrs
    try {
      await redisClient.setex(
        `auth_${accessToken}`,
        user._id.toString(),
        43200
      );
    } catch (e) {
      // implement logger and log error
      console.log(e.message);
    }

    //responding to client request access and request tokens.
    res.status(202).json({ accessToken });
  }

  static async logout(req, res) {
    await redisClient.del(`auth_${req.token}`);
    return res.status(204).end();
  }
}

module.exports = AuthController;
