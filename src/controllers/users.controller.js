const userService = require('../services/users.service');
const { validateToken } = require('../utils/auth');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await userService.checkUser(email, password);
    res.json({ token: newUser });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    return res.status(201).json({ token: newUser });
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
  };
   
const getAllUsers = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const users = await userService.findAllUsers(authorization);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try { 
    const { authorization } = req.headers;
    validateToken(authorization);
    const { id } = req.params;
    const user = await userService.findUserById(id);
    return res.status(200).json(user);
  } catch (err) {
  console.log(err);
   if (err.status) return res.status(err.status).json({ message: err.message });
    return res.status(500).json({ message: err });
  }
  };
  
module.exports = { login, createUser, getAllUsers, getUserById };
