const db = require('../../DB/mysql');
const TABLA = 'clientes';

// Retornar todos los datos de la Tabla Clientes
function todos() {
    return db.todos(TABLA);
}

module.exports = {
    todos
}
