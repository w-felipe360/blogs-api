const { User } = require('../models');
const generateToken = require('../utils/auth');

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

module.exports = { checkUser, createUser };
