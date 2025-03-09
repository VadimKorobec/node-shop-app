const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

router.get("/products", shopController.getAllProducts);
router.get("/products/:productId", shopController.getProductById);
router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout);
router.post("/add-to-cart", shopController.addToCart);

module.exports = router;
