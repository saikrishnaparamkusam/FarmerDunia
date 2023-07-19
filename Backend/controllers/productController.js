const {Category, Product} = require("../models/categoryModel");

const getProductHandler = async(req, res) => {
    try{
        const { category_id } = req.body;
        const category = await Category.findById({ _id: category_id });
        if(!category){
            res.send("Products are empty.");
        } else{
            const products = category.products;
            res.send(products);
        }
    }catch(err) {
        console.log("Error getting products:", err);
        res.status(400).send("Error in fetching products");
    }
} 

const updateProductHandler = async(req, res) => {
    try{
        const { category_id, product_id, name, product_image_path, price, quantity } = req.body;
        const updatedProduct = await Category.findOneAndUpdate(
            {_id: category_id, 'products._id': product_id},
            { $set: { 'products.$.name': name, 'products.$.product_image_path': product_image_path, 'products.$.price': price, 'products.$.quantity': quantity } },
            { new: true }
        );
        if (!updatedProduct) {
            console.log('Category or product not found.');
            res.status(200).send('Category or product not found.');
          }
      
          console.log('Updated Product:', updatedProduct);
          res.status(200).send("Product Updated successfully");
    }catch(err) {
        console.log("Error updating product:", err);
        res.status(400).send("Error in updating product");
    }
}

const deleteProductHandler = async(req, res) => {
    try{
        const { category_id, product_id } = req.body;
        const deletedProduct = await Category.findOneAndUpdate(
            {_id: category_id, 'products._id': product_id},
            { $pull: { products: {_id: product_id } } },
            { new: true }
        );
        if (!deletedProduct) {
            console.log('Category or product not found.');
            res.status(200).send('Category or product not found.');
          }
      
          console.log('Deleted Product:', deletedProduct);
          res.status(200).send("Product deleted successfully");
    }catch(err) {
        console.log("Error deleting product:", err);
        res.status(400).send("Error in deleting product");
    }
}

module.exports = {getProductHandler, updateProductHandler, deleteProductHandler};