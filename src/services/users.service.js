const { User } = require('../models');
const { generateToken, validateToken } = require('../utils/auth');

const checkUser = async (email, password) => {
const user = await User.findOne({ where: { email, password } });
const error = new Error('Invalid fields');
error.status = 400;
if (!user) throw error;
const token = generateToken(user.dataValues);
return token;
};

const createUser = async ({ displayName, email, password, image }) => {
     const existingUser = await User.findOne({ where: { email } });
     const error = new Error('User already registered');
     if (existingUser) throw error;
     const newUser = await User.create({ displayName, email, password, image });
     const token = generateToken(newUser.dataValues);
     return token;
};

const findAllUsers = async (token) => {
    validateToken(token);
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  };
  const findUserById = async (id) => {
    // validateToken(authorization);
    const user = await User.findOne({
     where: { id },
    attributes: { exclude: ['password'] },
    });
    const error = new Error('User does not exist');
    error.status = 404;
    if (!user) throw error;
    return user; 
};

module.exports = { checkUser, createUser, findAllUsers, findUserById };
