let getCartItemById = function (req, res) {
  res.send(`Fetching cart for user with ID: ${req.params.id}`);
}

let addToCart = function (req, res) {
  res.send(`Adding product to cart for user with ID: ${req.params.userID}`);
}

module.exports = {
  getCartItemById,
    addToCart
};