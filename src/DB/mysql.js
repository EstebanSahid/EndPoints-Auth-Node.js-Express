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
        const query = "SELECT * FROM ??";
        conexion.query(query, [tabla], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function uno(tabla, id) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM ?? WHERE id = ?";
        conexion.query(query, [tabla, id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function agregar(tabla, data) {
    if (data && data.id == 0) {
        return insertar(tabla, data);
    } else {
        return actualizar(tabla, data);
    }
}

function eliminar(tabla, data) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM ?? WHERE id = ?";
        conexion.query(query, [tabla, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function insertar(tabla, data) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO ?? (nombre, edad, profesion) VALUES (?, ?, ?);";
        conexion.query(query, [tabla, data.nombre, data.edad, data.profesion], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        const query = "UPDATE ?? SET nombre = ?, edad = ?, profesion = ? WHERE id = ?";
        conexion.query(query, [tabla, data.nombre, data.edad, data.profesion, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}



module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}