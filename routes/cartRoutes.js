let express = require('express');
let router = express.Router();
let {getCartItemById,addToCart} = require('../controllers/cartController');


// Define a route for getting a specific cart item by ID
router.get('/:id',getCartItemById );     

// Define a route for adding a new item to the cart
router.post('/:id', addToCart);     

module.exports = router;    