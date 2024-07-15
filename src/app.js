const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const error = require('./red/errors');
const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configuración de Puerto
app.set('port', config.app.port);

// Rutas
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios);
app.use(error);

module.exports = app;