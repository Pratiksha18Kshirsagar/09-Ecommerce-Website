let getAllProducts =(req, res)=> {
  return "Fetching all products";
}

let getProductById =(req, res)=> {
  return `Fetching product with ID:${req.params.id}`;
}

let addProduct = (req, res) =>{
  return 'Adding a new product';
}


module.exports = {
  getAllProducts,
  getProductById,
    addProduct
}