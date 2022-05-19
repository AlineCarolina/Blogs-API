const userService = require('../services/userService');
const { createToken } = require('../middlewares/token');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const findEmail = await userService.findEmail({ email });

    if (findEmail) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = createToken({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
    login,
};