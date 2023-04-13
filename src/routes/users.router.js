const express = require('express');
const usersController = require('../controllers/users.controller');
const {authToken} = require('../middleware/auth.middleware')

const routers = express.Router();
routers.post('/login', authToken, usersController.login);

module.exports = routers;

