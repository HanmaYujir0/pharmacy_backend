const Drug = require("../models/Drug.model");

module.exports.drugController = {
  postDrug: async (req, res) => {
    try {
      const postDrug = await Drug.create({
        name: req.body.name,
        price: req.body.price,
        drugCat: req.body.drugCat,
        recipe: req.body.recipe,
      });
      res.json(postDrug);
    } catch (error) {
      res.json(error);
    }
  },
  patchDrug: async (req, res) => {
    try {
      const patchDrug = await Drug.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        cash: req.body.cash,
        drugCat: req.body.drugCat,
        recipe: req.body.recipe,
      })
      res.json(patchDrug)
    } catch (error) {
      res.json(error);
    }
  },
  getDrug: async (req, res) => {
    try {
        const getDrug = await Drug.find()
        res.json(getDrug)
    } catch (error) {
        res.json(error)
    }
  },
  getDrugById: async (req, res) => {
    try {
      const getDrugById = await Drug.findById(req.params.id);
      res.json(getDrugById);
    } catch (error) {
      res.json(error);
    }
  },
  getDrugByCat: async (req, res) => {
    try {
      const getDrugByCat = await Drug.findById({drugCat: req.params.id});
      res.json(getDrugByCat);
    } catch (error) {
      res.json(error);
    }
  },
  deleteDrug: async (req, res) => {
    try {
      const deleteDrug = await Drug.findByIdAndRemove(req.params.id)
      res.json(deleteDrug)
    } catch (error) {
      res.json(error)
    }
  }
};
