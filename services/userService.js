const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const createUser = await User.create({
    displayName,
    email,
    password,
    image,
  });

  return createUser.dataValues;
};

const findEmail = async ({ email }) => {
    const result = await User.findAll({ where: { email } });
  
    return result;
};

const getAll = async () => {
  const result = await User.findAll();

  return result;
};

const getById = async ({ id }) => {
  const result = await User.findByPk(id);

  return result;
};

module.exports = {
    create,
    findEmail,
    getAll,
    getById,
};