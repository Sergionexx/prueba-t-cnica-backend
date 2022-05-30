const mongoose = require('mongoose');

const user ="mongodb";
const password="pruebatecnica123";
const dbname="prueba";
const uri = `mongodb+srv://${user}:${password}@cluster0.ydpeq.mongodb.net/${dbname}?retryWrites=true&w=majority`;


const mongoDbConnect = () => {
  mongoose.connect(uri).then(()=>console.log('### CONECTADO A LA BASE DE DATOS ###')).catch(e=>console.log(e));
};

module.exports = mongoDbConnect;