const { Categorie } = require('../models');

const create = async ({ name }) => {
  const result = await Categorie.create({ name });

  return result;
};

const getAll = async () => {
  const result = await Categorie.findAll();

  return result;
};

const findCategorie = async (categoryIds) => {
  const result = await Promise.all(
    categoryIds.map(async (id) => {
      const idExist = await Categorie.findOne({ where: { id } });
      return idExist;
    }),
  );
  return result.some((n) => !n);
};

module.exports = {
    create,
    getAll,
    findCategorie,
};