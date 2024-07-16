const auth = require('../auth');
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

    async function agregar(body) {
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            activo: body.activo
        }

        const respuesta = await db.agregar(TABLA, usuario);
        var insertId = 0;

        insertId = (body.id === 0) ? respuesta.insertId : body.id;

        if (body.usuario || body.password) {
            await auth.agregar({
                id: insertId,
                usuario: body.usuario,
                password: body.password
            })
        }

        return true
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
