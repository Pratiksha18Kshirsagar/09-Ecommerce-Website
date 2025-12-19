let getAllProducts =(req, res)=> {
  res.send("Fetching all products");
}

let getProductById =(req, res)=> {
  res.send(`Fetching product with ID:${req.params.id}`);
}

let addProduct = (req, res) =>{
  res.send('Adding a new product');
}

module.exports = {
  getAllProducts,
  getProductById,
    addProduct
}