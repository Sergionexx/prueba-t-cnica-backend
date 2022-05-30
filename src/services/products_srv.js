const productSrv = {};
const Product = require('../models/product');

productSrv.list = async(req, res) => {

    try {
        const arrayProductDB = await Product.find();        
        res.status(200).json({
            correct: true,
            resp: arrayProductDB
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

productSrv.create = async(req, res) => {
    const body = req.body;    
    try {
        await Product.create(body)    
        res.status(200).json({
            correct: true,
            resp: 'Producto creado con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

productSrv.getByid = async(req, res) => {
    const id = req.params.id    
    try {
        const arrayProductDB = await Product.findOne({_id:id});       
        res.status(200).json({
            correct: true,
            resp: arrayProductDB
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

productSrv.updateByid = async(req, res) => {
    const id = req.body._id    
    const body = req.body;
    try {
     await Product.findByIdAndUpdate(
        id, body, { useFindAndModify: false });       
        res.status(200).json({
            correct: true,
            resp: 'Producto actualizado con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

productSrv.deleteByid = async(req, res) => {
    const id = req.params.id    
    try {
     await Product.deleteOne({_id:id});       
        res.status(200).json({
            correct: true,
            resp: 'Producto eliminado con exito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

module.exports = productSrv;