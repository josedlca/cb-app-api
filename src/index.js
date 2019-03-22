const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();

// Settings
// aqui defino el puerto en que usara mi aplicaion, la primera parte le digo 
// si me dan un puerto pues ahi vas y si no te dan ninguno , despliegate en el 
// puerto 3000
app.set('port', process.env.PORT || 3000);

// Middlewares (funcionesque se ejecutan antes de  las rutas)
// morgan trabaja con morgan
app.use(morgan('dev'));
// esto comprobara que la informacion qu recibimos esta en formato json
app.use(express.json());



// Routes
app.use('/api/login' ,require('./routes/login.routes'));




// static files
// aqui le digo que use el contenido de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), ()=>{
    console.log(`El puerto es ${app.get('port')}`);
})