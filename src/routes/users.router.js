const express = require('express');
const usersController = require('../controllers/users.controller');
const { authToken } = require('../middleware/auth.middleware');
const { fieldMiddleware,
    passwordLengthMiddleware, 
    emailRegexMiddleware } = require('../middleware/fieldMiddleware');

const routers = express.Router();
routers.post('/login', authToken, usersController.login);
routers.post(
'/user', 
fieldMiddleware,
passwordLengthMiddleware, 
emailRegexMiddleware, 
usersController.createUser,
);

module.exports = routers;