const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;

function asignarToken(data) {
    return jwt.sign(data, secret);
}

module.exports = {
    asignarToken
}