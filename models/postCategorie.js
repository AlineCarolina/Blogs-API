module.exports = (sequelize, _DataTypes) => {
    const PostCategorie = sequelize.define('PostCategorie', {}, // mapeia PK automaticamente (Renatão comentou em aula)
      { timestamps: false, tableName: 'PostsCategories' });
  
    // relacionamento N:N - material da aula 24.2 no course
    PostCategorie.associate = (models) => {
      models.Categorie.belongsToMany(models.BlogPost, { 
          as: 'blogPosts',
          through: PostCategorie,
          foreignKey: 'categoryId',
          otherKey: 'postId',
         });
      models.BlogPost.belongsToMany(models.Categorie, { 
          as: 'categories',
          through: PostCategorie,
          foreignKey: 'postId',
          otherKey: 'categoryId',
         });
    };
  
    return PostCategorie;
  };