const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;
const error = require('../middleware/errors')

function asignarToken(data) {
    return jwt.sign(data, secret);
}

function verificarToken(token) {
    return jwt.verify(token, secret);
}

const checkToken = {
    confirmarToken: function(req) {
        const decodificado = decodificarCabecera(req);

        // Poner aqui los permisos segun roles, usuarios, etc.
        if (decodificado.id !== 2) {
            throw error("No tienes privilegios para hacer esto", 401);
        }
    }
}

function obtenerToken(autorizacion) {
    if (!autorizacion) {
        throw error('No viene Token', 401);
    }

    if (autorizacion.indexOf('Bearer') === -1) {
        throw error('Formato Inválido', 401);
    }

    let token = autorizacion.replace('Bearer ', '');

    return token;
}

function decodificarCabecera(req) {
    const autorizacion = req.headers.authorization || '';
    const token = obtenerToken(autorizacion);
    const decodificado = verificarToken(token);

    req.user = decodificado;

    return decodificado;
}

module.exports = {
    asignarToken,
    checkToken
}