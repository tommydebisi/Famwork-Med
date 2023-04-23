const Joi = require("joi");

const createUserSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string()
    .min(6) // Password should be at least 6 characters long
    .regex(/^(?=.*[!@#$%^&*])/) // Password should contain at least one symbol
    .required(),
});

module.exports = createUserSchema;
