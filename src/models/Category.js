const categoriesModel = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Category', {
   name: DataTypes.STRING,
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
   },
    }, {
    tablename: 'categories',
    timestamps: false,
    underscored: true,
  });
  // categorie.associate = (models) => {
  //   categorie.hasMany(models.BlogPost, {
  //     foreignKey: 'categoryId',
  //     as: 'blog_posts'
  //   })
  // }
  return categorie;
}
module.exports = categoriesModel 