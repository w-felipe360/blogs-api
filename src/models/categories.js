const categoriesModel = (sequelize, DataTypes) => {
  const categorie = sequelize.define('categories', {
   name: DataTypes.STRING,
  }, {
    tablename: 'categories',
    timestamps: false,
    underscored: true,
  });
  return categorie;
}
module.exports = categoriesModel