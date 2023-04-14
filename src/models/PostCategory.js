const postCategoriesModel = (sequelize, DataTypes) => {
  const postCategorie = sequelize.define('PostCategory', {
   postId:{
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
   },
   categoryId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    primaryKey: true,
   }
  },
 {
  tableName: 'posts_categories',
  underscored: true,
  timestamps: false,  
 }
  );
  postCategorie.associate = (models) => {
  models.Category.belongsToMany(models.BlogPost,{
    foreignKey: 'postId',
    as: 'posts',
    through: postCategorie
  });
  models.BlogPost.belongsToMany(models.Category, {
    foreignKey: 'categoryId',
    as: 'categories',
    through: postCategorie,
  });
  }
  return postCategorie;
}
module.exports = postCategoriesModel
