const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({    
    orderDate:String,
    soldBy:String,
    total:String,
    subtotal:String,
    unitSalePrice:String,
    quanty:String,
    idClient:String,
    idProduct:String 
})

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;