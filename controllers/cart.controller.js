const Cart = require("../models/Cart.model");
const User = require("../models/User.model");
const Drug = require("../models/Drug.model");

module.exports.cartController = {
  postCart: async (req, res) => {
    try {
      const postCart = Cart.create({
        user: req.body.user,
      });
      res.json(postCart);
    } catch (error) {
      res.json(error);
    }
  },
  addDrug: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      const drug = await Drug.findById(req.body.product);
      const user = await User.findById(cart.user);

      if (drug.recipe) {
        if (user.recipe) {
          await Cart.findByIdAndUpdate(req.params.id, {
            $push: { product: req.body.product },
            $set: { summ: cart.summ + drug.price },
          });
          res.json("Лекарство добавлено в корзину");
        } else {
          res.json("У вас нет рецепта на это лекарство");
        }
      } else {
        await Cart.findByIdAndUpdate(req.params.id, {
          $push: { product: req.body.product },
          $set: { sum: cart.sum + drugs.price },
        });
        res.json("Лекарство добавлено в корзину");
      }
    } catch (error) {
      res.json(error);
    }
  },
  returnDrugs: async (req, res) => {
    try {
      const drug = await Drug.findById(req.body.product);
      const cart = await Cart.findByIdAndUpdate(req.params.id);
      if (cart.product.includes(req.body.product)) {
        await Cart.findByIdAndUpdate(cart, {
          $pull: { product: req.body.product },
          sum: cart.sum - drug.price,
        });
        res.json("Лекарство удалено из корзины");
      }
    } catch (error) {
      res.json(error);
    }
  },
  clearnCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        product: [],
        summ: null,
      });
      res.json("Корзина очищена");
    } catch (error) {
      res.json(error);
    }
  },
  buyDrug: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      const user = await User.findById(req.params.userId);

      if (cart.summ > user.wallet) {
        res.json("У вас не достаточно денег");
      }
      await User.findByIdAndUpdate(cart.user, {
        cash: user.wallet - cart.summ,
      });
      await Cart.findByIdAndUpdate(cart.user, {
        product: [],
        sum: null,
      });
      res.json("Покупка совершена");
    } catch (error) {}
  },
  topUpCash: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      User.findByIdAndUpdate(req.params.id, {
        cash: user.wallet + req.body.wallet,
      });
      res.json("Вы пополнили баланас");
    } catch (error) {
      res.json(error);
    }
  },
};
