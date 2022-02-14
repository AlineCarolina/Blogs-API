const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).message('"password" length must be 6 characters long').required(),
  image: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().empty().required(),
  password: Joi.string().min(6).message('"password" length must be 6 characters long').required(),
});

module.exports = {
  userSchema,
  loginSchema,
};