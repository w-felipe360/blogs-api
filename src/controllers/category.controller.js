const categoryService = require('../services/category.service');
const { validateToken } = require('../utils/auth');

const createCategory = async (req, res) => {
    try {
    const { authorization } = req.headers;
    validateToken(authorization);
      const newCategory = await categoryService.createCategory(req.body);
      return res.status(201).json(newCategory);
    } catch (err) {
      return res.status(err.status).json({ message: err.message });
    }
    };

    module.exports = {
        createCategory,
    };