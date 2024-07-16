const TABLA = 'auth';
const bcrypt = require('bcrypt');

module.exports = function(dbInyectada) {

    let db = dbInyectada;

    if (!db) {
        db = require('../../DB/mysql');
    }

    async function agregar(data) {
        console.log("llego");
        const authData = {
            id: data.id
        }

        if (data.usuario) {
            authData.usuario = data.usuario
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }
        console.log(authData);
        return await db.agregar(TABLA, authData);
    }

    return {
        agregar
    }
}
