const { Router } = require("express");
const { drugController } = require("../controllers/drug.controller");

const router = Router();

router.post('/admin/drug', drugController.postDrug)
router.get('/admin/drug/:id', drugController.getDrugById)
router.get('/admin/drug', drugController.getDrug)
router.delete('/admin/drug/:id', drugController.deleteDrug)
router.get('/admin/drug/category/:id', drugController.getDrugByCat)
router.patch('/admin/drug/:id', drugController.patchDrug)

module.exports = router