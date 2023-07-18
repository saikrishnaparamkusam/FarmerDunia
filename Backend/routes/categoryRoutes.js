const express = require("express");
const router = express.Router();
const {addCategoryHandler, updateCategoryHandler, deleteCategoryHandler, getCategoryHandler} = require("../controllers/categoryController")

//To insert Cateogory fields
router.post("/addcategory", addCategoryHandler);
//To update Category fields
router.put('/updateCategory', updateCategoryHandler);
//To delete Category fields
router.delete('/deleteCategory', deleteCategoryHandler);
//To get Category fields
router.get('/getCategory', getCategoryHandler);
module.exports = router;