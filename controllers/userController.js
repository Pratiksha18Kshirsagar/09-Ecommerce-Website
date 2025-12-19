
let getAllUser = (req, res) => {
  res.send("Fetching all users");
}

let getUserById = (req, res) => {
  res.send(`Fetching user with ID:${req.params.id}`);
}

let addUser =  (req, res) => {
  res.send("Adding a new User");
}

module.exports = {getAllUser, getUserById, addUser}