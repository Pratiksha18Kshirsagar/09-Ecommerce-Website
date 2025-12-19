let productServices = require('../services/productServices');

let getAllProducts =(req, res)=> {
  res.send(productServices.getAllProducts(req, res));
}

let getProductById =(req, res)=> {
  res.send(productServices.getProductById(req, res));
}

let addProduct = (req, res) =>{
  res.send(productServices.addProduct(req, res));
}

module.exports = {
  getAllProducts,
  getProductById,
    addProduct
}