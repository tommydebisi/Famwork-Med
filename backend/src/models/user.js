const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: [4, "username must be more than 4 characters"],
    validate: {
      validator: function (v) {
        return /^\w[a-zA-Z0-9]+/.test(v);
      },
      message: (props) => {
        return "shouldn't contain special character and spaces";
      },
    },
  },
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

module.exports = mongoose.model('User', UserSchema);
