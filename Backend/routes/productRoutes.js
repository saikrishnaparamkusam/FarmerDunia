const express = require("express");
const router = express.Router();
const {getProductHandler, updateProductHandler, deleteProductHandler} = require("../controllers/productController");

//To get products based on Category_Id
router.get("/getProducts", getProductHandler);
//To update products based on Category_Id and Product_id
router.put("/updateProducts", updateProductHandler);
//To delete products based on Category_Id and Product_id
router.delete("/deleteProducts", deleteProductHandler);

module.exports = router;
