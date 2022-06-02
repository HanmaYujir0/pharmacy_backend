const User = require("../models/User.model");
const Cart = require("../models/Cart.model");

module.exports.userController = {
  postUser: async (req, res) => {
    try {
      const postUser = await User.create({
        name: req.body.name,
        cash: req.body.cash,
        recipe: req.body.recipe,
      });
      await Cart.create({
        user: postUser._id,
      });
      res.json(postUser);
    } catch (error) {
      res.json(error);
    }
  },
  patchUser: async (req, res) => {
    try {
      const patchUser = User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        cash: req.body.cash,
        recipe: req.body.recipe,
      });
    } catch (error) {
      res.json(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const getUser = User.find();
      res.json(getUser);
    } catch (error) {
      res.json(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const getUserById = User.findById(req.params.id);
      res.json(getUSerById);
    } catch (error) {
      res.json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deleteUser = User.findByIdAndRemove(req.params.id);
    } catch (error) {
      res.json(error);
    }
  },
};
