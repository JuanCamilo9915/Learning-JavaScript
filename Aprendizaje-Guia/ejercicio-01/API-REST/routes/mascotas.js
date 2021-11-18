const serverRoutesExpress = require('express');
const routersServer = serverRoutesExpress.Router();

//Trae la conexión de la BD
const connectionDB = require('../DB');

//Consulta en la BD dentro de la tabla mascotas
routersServer.get('/', (reqApiRest, resApiRest) => {
    //Se realiza una consulta
    connectionDB.query('select * from mascotas', (err, rows, fields) => {
        reqApiRestGeneral(resApiRest, err, rows, fields);//Llamada al método que gestiona las resApiRest generales de la REST API
    });
});

//Recibe un paráemtro get, el cual corresponde al id de la tabla mascotas
routersServer.get('/:id', (reqApiRest, resApiRest) => {
    const {id} = reqApiRest.params;
    connectionDB.query('select * from mascotas where id = ?', [id], (err, rows, fields) => {
        reqApiRestGeneral(resApiRest, err, rows, fields);//Llamada al método que gestiona las resApiRest generales de la REST API
    });
});

//Se crea el método de respuesta
function reqApiRestGeneral(resApiRest, err, rows, fields){
    if (!err) {
        resApiRest.json(rows);//El servidor envia los datos en formato de JSON
    } else {
        console.log('Ocurrio un error en la consulta inicial, el error corresponde a: ' + err);
    }
}

module.exports = routersServer;