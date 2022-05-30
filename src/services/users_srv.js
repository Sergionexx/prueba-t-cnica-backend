
const usersSrv = {};
const User = require('../models/user');
usersSrv.list = async(req, res) => {

    try {
        const arrayUserDB = await User.find();        
        res.status(200).json({
            correct: true,
            resp: arrayUserDB
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

usersSrv.create = async(req, res) => {
    const body = req.body;   
    try {
        await User.create(body)    
        res.status(200).json({
            correct: true,
            resp: 'usuario creado con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

usersSrv.getByid = async(req, res) => {
    const id = req.params.id    
    try {
        const arrayUserDB = await User.findOne({_id:id});       
        res.status(200).json({
            correct: true,
            resp: arrayUserDB
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

usersSrv.updateByid = async(req, res) => {
    const id = req.body._id    
    const body = req.body;
    try {
     await User.findByIdAndUpdate(
        id, body, { useFindAndModify: false });       
        res.status(200).json({
            correct: true,
            resp: 'Usuario actualizado con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

usersSrv.deleteByid = async(req, res) => {
    const id = req.params.id    
    try {
     await User.deleteOne({_id:id});       
        res.status(200).json({
            correct: true,
            resp: 'Usuario eliminado con éxito'
        });
    } catch (error) {
        res.status(400).json({
            correct: false,
            resp: error
        });     
    }
};

module.exports = usersSrv;