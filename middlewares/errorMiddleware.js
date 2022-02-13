const errorMiddleware = (err, _req, res, _next) => {
  if (err.message) {
    return res.status(500).json(err.message);
  }

  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = {
  errorMiddleware,
};
