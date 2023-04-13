const userService = require('../services/users.service');

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
   
module.exports = { login, createUser };
