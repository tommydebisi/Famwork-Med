const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]+@\w+.\w+/.test(v);
      },
      message: function (props) {
        return `${props.value} is not a valid email!`;
      },
    },
  },
  hashed_password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 5,
  },
  status: {
    type: String,
    required: true,
    default: 'Patient'
  },
  specialization: {
    type: String,
    required: false,
  },
  experience: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
