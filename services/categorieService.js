const { Categorie } = require('../models');

const create = async ({ name }) => {
  const result = await Categorie.create({ name });

  return result;
};

module.exports = {
    create,
};