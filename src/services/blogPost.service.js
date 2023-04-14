const { BlogPost, User, Category } = require('../models');

// const createPost = async ({ title, content, categoryIds }) => {
//   const result = await BlogPost.create({ title, content, categoryIds });
//   return result;
// };
const findAllPosts = async () => {
    const posts = await BlogPost.findAll({
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
      include: [
        { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Category, as: 'categories', attribute: ['id', 'name'] },
    ]
        ,
    });
    return posts;
  };

module.exports = {
    // createPost,
    findAllPosts,
};