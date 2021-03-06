const userService = require('../services/userService');
const { createToken } = require('../middlewares/token');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const findEmail = await userService.findEmail({ email });

    if (findEmail) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const { id } = await userService.create({
      displayName,
      email,
      password,
      image,
    });

    const token = createToken({ userId: id, displayName, email });

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const result = await userService.getAll();

    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userService.getById({ id });

    if (!result) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
     create,
     getAll,
     getById,
};