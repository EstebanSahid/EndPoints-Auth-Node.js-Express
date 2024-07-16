//const db = require('../../DB/mysql');
const TABLA = 'auth';


module.exports = function(dbInyectada) {

    let db = dbInyectada;

    if (!db) {
        db = require('../../DB/mysql');
    }

    async function agregar(data) {
        console.log("llego");
        const authData = {
            id: data.id,
            //password: data.password
        }

        if (data.usuario) {
            authData.usuario = data.usuario
        }

        if (data.password) {
            authData.password = data.password
        }
        console.log(authData);
        return await db.agregar(TABLA, authData);
    }

    return {
        agregar
    }
}
