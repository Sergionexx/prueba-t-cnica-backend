const orderSrv = {};
const Order = require('../models/order');

orderSrv.list = async(req, res) => {

    try {
        const arrayOrderDB = await Order.find();
        console.log("Datos de Orden",arrayOrderDB)
        res.status(200).json({
            correct: true,
            resp: arrayOrderDB
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

orderSrv.create = async(req, res) => {
    const body = req.body;    
    console.log("body",req);
    try {
        await Order.create(body)    
        res.status(200).json({
            correct: true,
            resp: 'Orden creada con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

orderSrv.getByid = async(req, res) => {
    const id = req.params.id    
    try {
        const arrayOrderDB = await Order.findOne({_id:id});       
        res.status(200).json({
            correct: true,
            resp: arrayOrderDB
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

orderSrv.updateByid = async(req, res) => {
    const id = req.body._id    
    const body = req.body;
    try {
     await Order.findByIdAndUpdate(
        id, body, { useFindAndModify: false });       
        res.status(200).json({
            correct: true,
            resp: 'Orden actualizada con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

orderSrv.deleteByid = async(req, res) => {
    const id = req.params.id    
    try {
     await Order.deleteOne({_id:id});       
        res.status(200).json({
            correct: true,
            resp: 'Orden eliminada con exito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

module.exports = orderSrv;