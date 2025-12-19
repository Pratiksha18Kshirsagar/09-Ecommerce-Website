let express = require('express');
let router = express.Router();
let {getUser, getUserById,addUser} = require('../controllers/userController');

// Define routes for user operations        
router.get('/' , getUser);
router.get('/:id', getUserById);
router.post('/',addUser);

module.exports = router;