const express = require('express');

const respuestas = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', async function (req, res) {
    const items = await controlador.todos()
    respuestas.success(req, res, items, 200)
});

module.exports = router;