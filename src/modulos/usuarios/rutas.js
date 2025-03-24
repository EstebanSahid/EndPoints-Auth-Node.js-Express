const express = require('express');
const seguridad = require('./seguridad');
const respuestas = require('../../red/respuestas');
const controlador = require('./index');

const router = express.Router();

// Rutas
router.get('/', seguridad(), todos);
router.get('/:id', seguridad(), uno);
router.post('/', seguridad(), agregar);
router.put('/', seguridad(), eliminar);

// Llamada al Controlador
async function todos (req, res, next) {
    console.log(req.body);
    try {
        const items = await controlador.todos()
        respuestas.success(req, res, items, 200)
    } catch (error) {
        next(error);
    }
};

async function uno (req, res, next) {
    try {
        const items = await controlador.uno(req.params.id)
        respuestas.success(req, res, items, 200)
    } catch (error) {
        next(error);
    }
};

async function agregar (req, res, next) {
    try {
        console.log(req.body);
        const items = await controlador.agregar(req.body);
        if (req.body.id == 0) {
            mensaje = 'Item Guardado con Exito';
        } else {
            mensaje = 'Item Actualizado con Exito'+ req.body.id + req.body.nombre + req.body.edad + req.body.profesion;
        }
        respuestas.success(req, res, mensaje, 201)
    } catch (error) {
        next(error);
    }
};

async function eliminar (req, res, next) {
    try {
        const { id } = req.body;
        if (id) {
            const items = await controlador.eliminar(req.body)
            respuestas.success(req, res, 'Item Eliminado Correctamente', 200)
        } else {
            respuestas.error(req, res, "ID necesario", 500);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = router;