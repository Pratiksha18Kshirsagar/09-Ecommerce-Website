let express = require('express');
let router = express.Router();

// Define a route for getting user information
router.get('/', function (req, res) {
  res.send("Fetching all products");
});

// Define a route for getting a specific product by ID
router.get('/:id', function (req, res) {
  res.send(`Fetching product with ID:${req.params.id}`);
});     

// Define a route for creating a new product
router.post('/', function (req, res) {
  res.send('Adding a new product');
});     

module.exports = router;