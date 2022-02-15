/****************** Nodejs Dependencies ******************/
require('dotenv').config() // carga fichero variables de entorno
const express = require('express')
const logger = require('morgan');
const helmet = require("helmet"); //Para seguridad

/****************** Import Routes ******************/
const userRoutes = require('./routes/users')
const suitcaseRoutes = require('./routes/suitcases')
const outfitsRoutes = require('./routes/outfits')

/****************** Enable Express ******************/
const app = express()
const port = process.env.PORT || 4000
require('./utils/dbmongo') //Conexión a la BBDD de mongo

/****************** Express Settings ******************/
app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.urlencoded( { extended: false } )); //Habilita la lectura del body por metodo post
app.use(logger('dev')) // habilitar Morgan con preset dev
app.use(helmet());

/****************** Routes ******************/
app.use('/api', userRoutes);
app.use('/api', suitcaseRoutes);
app.use('/api', outfitsRoutes);

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})