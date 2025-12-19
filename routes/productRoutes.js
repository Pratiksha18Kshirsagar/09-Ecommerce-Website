let express = require('express');
let router = express.Router();
let { getProducts,getProductById ,addProduct} = require('../controllers/productController');

// Define a route for getting user information
router.get('/', getProducts);

// Define a route for getting a specific product by ID
router.get('/:id', getProductById);     

// Define a route for creating a new product
router.post('/', addProduct);     

module.exports = router;