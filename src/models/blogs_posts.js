/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
const blogPostsModel = sequelize.define('BlogPost', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
},{
  tableName: 'blog_posts',
  timestamps: false,  
});
return blogPostsModel
}