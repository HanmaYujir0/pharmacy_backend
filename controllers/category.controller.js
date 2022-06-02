const Category = require("../models/Category.model");

module.exports.categoryController = {
  postCategory: async (req, res) => {
    try {
      const postCategory = await Category.create({
        name: req.body.name,
        description: req.body.description,
      });
      res.json(postCategory);
    } catch (error) {
      res.json(error);
    }
  },
  patchCategory: async (req, res) => {
    try {
      const patchCategory = Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
      })
      res.json(patchCategory)
    } catch (error) {
      res.json(error);
    }
  },
  getCategory: async (req, res) => {
    try {
        const getCategory = Category.find()
        res.json(getCategory)
    } catch (error) {
        res.json(error)
    }
  },
  getCategoryById: async (req, res) => {
    try {
      const getCategoryById = Category.findById(req.params.id);
      res.json(getCategoryById);
    } catch (error) {
      res.json(error);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const deleteCategory = Category.findByIdAndRemove(req.params.id)
      res.json(deleteCategory)
    } catch (error) {
      res.json(error)
    }
  }
};