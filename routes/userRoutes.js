let express = require('express');
let router = express.Router();


// Define routes for user operations        
router.get('/' , (req, res) => {
  res.send("Fetching all users");
});
router.get('/:id', (req, res) => {
  res.send(`Fetching user with ID:${req.params.id}`);
});
router.post('/', (req, res) => {
  res.send("Adding a new User");
});
module.exports = router;