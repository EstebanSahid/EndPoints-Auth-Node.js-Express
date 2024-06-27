const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;

function conexionmysql() {
    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err) => {
        if (err) {
            console.log("El error es: ", err);
            setTimeout(conexionmysql, 200);
        } else {
            console.log('DB Conectada');
        }
    });

    conexion.on('error', err => {
        console.log("El error es: ", err);
        if (err.code === 'PROTOCOL_CONECTION_LOST') {
            conexionmysql();
        } else {
            throw err;
        }
    })
}

conexionmysql();

// Funciones para leer y manipular la data
function todos(tabla) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM ??"
        conexion.query(query, [tabla], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        })
    });
}

function uno(tabla, id) {

}

function agregar(tabla, data) {

}

function eliminar(tabla, id) {

}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}