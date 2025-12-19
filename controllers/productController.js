let productServices = require('../services/productServices');
let path = require('path');

let getAllProducts =(req, res)=> {
  // res.send(productServices.getAllProducts(req, res));
  res.sendFile(path.join(__dirname, '../view/products.html'));
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