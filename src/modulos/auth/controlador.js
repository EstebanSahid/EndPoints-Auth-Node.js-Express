//const db = require('../../DB/mysql');
const TABLA = 'usuarios';


module.exports = function(dbInyectada) {

    let db = dbInyectada;

    if (!db) {
        db = require('../../DB/mysql');
    }

    // Retornar todos los datos de la Tabla Clientes
    function todos() {
        return db.todos(TABLA);
    }

    function uno(id) {
        return db.uno(TABLA, id);
    }

    function agregar(body) {
        return db.agregar(TABLA, body);
    }

    function eliminar(body) {
        return db.eliminar(TABLA, body);
    }

    return {
        todos,
        uno,
        agregar,
        eliminar
    }
}
