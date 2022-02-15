const { BlogPost, User, Categorie } = require('../models');

const create = async ({ title, content, userId }) => {
  const result = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  return result.dataValues;
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories' },
    ],
  });
  return result;
};

module.exports = {
    create,
    getAll,
};