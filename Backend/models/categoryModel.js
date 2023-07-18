const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
    name: {
        type: 'String',
        required: true,
        unique : true
    },
    quantity: {
        type: 'String',
        required: true
    },
    price: {
        type: 'String',
        required: true
    },
    product_image_path:{
        type: 'String',
        required: true
    }
});

const categorySchema = new schema({
    name:{
        type: 'String',
        unique : true,
        required: true
    },
    products : [productSchema],
    category_image_path : {
        type: 'String',
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
  Category,
  Product
};