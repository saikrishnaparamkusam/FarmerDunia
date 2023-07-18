const { Category, Product } = require("../models/categoryModel");

const addCategoryHandler = async (req, res) => {
    try{
        const { name,products,category_image_path } = req.body;
        // Create a new category
    const category = new Category({
        name,
        products,
        category_image_path
    });
    
    // Save the category and products
    const savedCategory = await category.save()
    console.log('Category saved:', savedCategory);
    res.status(200).send("Category Added");      
    }catch(err) {
        console.log('Error saving category:', err);
        res.status(400).send("category adding failed");
    }
};

const updateCategoryHandler = async(req, res) => {
    try{
        const { category_id, name, products, category_image_path } = req.body;
        await Category.updateOne(
            {_id: category_id},
            {name,category_image_path}
        );
        res.status(200).send("Category updated successfully");
    }catch(err){
        console.log("Error updating category:", err);
        res.status(400).send("Category updated failed");
    }
};

const deleteCategoryHandler = async(req, res) => {
    try{
        const { category_id } = req.body;
        const result = await Category.deleteOne({ _id: category_id });
        console.log(result.deletedCount);
        if(result.deletedCount === 0){
            res.status(400).send("Category not found...");
        }
        else{
            res.status(200).send("Category deleted successfully");
        }
        
    }catch(err) {
        console.log("Error deleting category:", err);
        res.status(400).send("Category updated failed");
    }
};

const getCategoryHandler = async(req, res) => {
    try{
        const categories = await Category.find({}).sort({name:1}).select('_id name category_image_path');
        console.log("categories (sorted):", categories);
        res.status(200).send(categories);
    }catch(err) {
        console.log("Error getting category:", err);
        res.status(400).send("Category getting failed");
    }
};



module.exports = {addCategoryHandler, updateCategoryHandler, deleteCategoryHandler, getCategoryHandler};