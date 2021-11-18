const dbMySql = require('mysql');

const connectionDB = dbMySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mascotasDos'
});

//Realiza la conección con la BD
connectionDB.connect(function (err){
    if (err) {
        console.log('Error al conectarse con la BD "mascotasDOs", \nEl error es: ' + err);
        return;
    } else{
        console.log('Conexión a la BD "mascotasDos", exitosa');
        console.log('La API REST se conectó a la BD "mascotasDos", exitosamente');
    }
});

//Exportamos la conexión a la BD
module.exports = connectionDB;