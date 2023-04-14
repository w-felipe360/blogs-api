const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');

const routers = express.Router();
routers.get('/', blogPostController.getAllPosts);

module.exports = routers;