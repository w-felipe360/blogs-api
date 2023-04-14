const blogPostService = require('../services/blogPost.service');
const { validateToken } = require('../utils/auth');

// const createPost = async (req, res) => {
//     try {
//     const { authorization } = req.headers;
//     validateToken(authorization);
//       const newPost = await blogPostService.createPost(req.body);
//       return res.status(201).json(newPost);
//     } catch (err) {
//       return res.status(err.status).json({ message: err.message });
//     }
//     };
    const getAllPosts = async (req, res) => {
        try {
            const { authorization } = req.headers;
            validateToken(authorization);
            const posts = await blogPostService.findAllPosts();
            return res.status(200).json(posts);
        } catch (err) {
            console.log(err);
            return res.status(err.status).json({ message: err.message });
        }
      };

    module.exports = {
        // createPost,
        getAllPosts,
    };