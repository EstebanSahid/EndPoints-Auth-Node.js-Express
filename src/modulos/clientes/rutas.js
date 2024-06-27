const express = require('express');

const respuestas = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', function (req, res) {
    const todos = controlador.todos()
    .then((items) => {
        respuestas.success(req, res, items, 200)
    })
    
});

module.exports = router;