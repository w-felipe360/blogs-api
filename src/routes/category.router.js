const express = require('express');
const categoryController = require('../controllers/category.controller');
const { nameMiddleware } = require('../middleware/category.middleware');

const routers = express.Router();
routers.post('/', nameMiddleware, categoryController.createCategory);
routers.get('/', categoryController.getAllCategories);

module.exports = routers;