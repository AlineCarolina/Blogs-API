const { Categorie } = require('../models');

const create = async ({ name }) => {
  const result = await Categorie.create({ name });

  return result;
};

const getAll = async () => {
  const result = await Categorie.findAll();

  return result;
};

module.exports = {
    create,
    getAll,
};