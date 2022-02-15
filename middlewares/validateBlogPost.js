const { blogPostSchema } = require('../utils/joiSchemas');

const validateBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const { error } = blogPostSchema.validate({ title, content, categoryIds });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  validateBlogPost,
};