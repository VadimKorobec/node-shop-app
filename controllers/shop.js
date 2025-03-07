exports.getAllProducts = (req, res, next) => {
    res.send('<p>All Products</p>')
};

exports.getCart = (req, res, next) => {
    res.send('<p>Cart</p>')
}

exports.getCheckout = (req, res, next) => {
    res.send('<p>Checkout</p>')
}