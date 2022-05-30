const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({    
    UPC:String,
    proName:String,
    mfgr:String,
    model:String,
    unitListPrice:String,
    unitsInStock:String
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;