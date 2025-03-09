exports.getAllProducts = (req, res, next) => {
  res.send("<p>All Products</p>");
};

exports.getProductById = (req, res, next) => {
  const { productId } = req.params;
};

exports.getCart = (req, res) => {
  res.json({
    message: 'Cart'
  })
};

exports.getCheckout = (req, res) => {
  res.send("<p>Checkout</p>");
};

exports.addToCart = (req, res, next) => {};
