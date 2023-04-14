/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
const blogPostsModel = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
   },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  }
},{
  tableName: 'blog_posts',
  underscored: true,
  timestamps: false,  
});
  blogPostsModel.associate = (models) => {
    blogPostsModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }
return blogPostsModel
}