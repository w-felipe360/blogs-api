const postCategoriesModel = (sequelize, DataTypes) => {
  const postCategorie = sequelize.define('postCategories', {
    tablename: 'posts_categories',
    timestamps: false,
    underscored: true,
  });
  return postCategorie;
}
module.exports = postCategoriesModel

// N PRA N