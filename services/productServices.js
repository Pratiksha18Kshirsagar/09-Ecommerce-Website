let getAllProducts =(req, res)=> {
  return "Fetching all products";
}

let getProductById =(req, res,next)=> {
  if(req.params.id){
    return `Fetching product with ID:${req.params.id}`;
  }
  else{
    next(error);
  }
}

let addProduct = (req, res) =>{
  let data = req.body;
  console.log("Product data received:", data);
  // Here, you would typically add the product to your database
  res.json({value: data.productName });
}


module.exports = {
  getAllProducts,
  getProductById,
    addProduct
}