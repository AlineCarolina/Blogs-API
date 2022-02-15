const { BlogPost } = require('../models');

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

module.exports = {
    create, 
};