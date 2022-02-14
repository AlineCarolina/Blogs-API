const { categorieSchema } = require('../utils/joiSchemas');

const validateCategorie = (req, res, next) => {
  const { name } = req.body;

  const { error } = categorieSchema.validate({ name });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
    validateCategorie,
};