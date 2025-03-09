const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')

router.get('/add-product', adminController.addProduct)
router.post('/add-product', adminController.addProduct)
router.put('/edit-product', adminController.editProductById);
router.delete('/delete-product', adminController.deleteProductById)

module.exports = router;