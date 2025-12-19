let express = require('express');
let router = express.Router();



// Define a route for getting a specific cart item by ID
router.get('/:id', function (req, res) {
  res.send(`Fetching cart for user with ID: ${req.params.id}`);
});     

// Define a route for adding a new item to the cart
router.post('/:id', function (req, res) {
  res.send(`Adding product to cart for user with ID: ${req.params.userID}`);
});     

module.exports = router;    