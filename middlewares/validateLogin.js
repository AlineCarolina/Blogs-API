const { loginSchema } = require('../utils/joiSchemas');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
    validateLogin,
};