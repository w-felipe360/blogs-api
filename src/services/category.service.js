const { Category } = require('../models');

const createCategory = async ({ name }) => Category.create({ name });

const findAllCategories = async () => {
    const categories = await Category.findAll();
    console.log(categories);
    return categories;
  };
  
  module.exports = {
    createCategory,
    findAllCategories,
  };