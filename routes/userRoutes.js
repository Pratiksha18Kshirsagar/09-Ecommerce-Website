let express = require('express');
let router = express.Router();
let {getAllUser, getUserById,addUser} = require('../controllers/userController');

// Define routes for user operations        
router.get('/' , getAllUser);
router.get('/:id', getUserById);
router.post('/',addUser);

module.exports = router;