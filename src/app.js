const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoDB = require('./config/mongodb_connect');
const app = express();
const routes = require('./routes/routes');
const { server } = require('./config/data_config');


// settings
app.set('port', process.env.PORT || `${server.port}`);

//Hago la conexión a la base de datos
mongoDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//registro las solicitudes HTTP
app.use(morgan('dev'));

// routes
app.use('/', routes);

// bootstraping the app
app.listen(`${server.port}`, () => console.log("####SERVIDOR LEVANTADO EN EL PUERTO: "+server.port+" ####"));



