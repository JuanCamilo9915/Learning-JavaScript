const serverExpress = require('express');
const appApiRest = serverExpress();

//Config del Servidor
appApiRest.set('port', process.env.PORT || 3300);

//Middlewares
appApiRest.use(serverExpress.json());

//Rutas o URL
appApiRest.use(require('./routes/mascotas'));

//Ejecución del servidor
appApiRest.listen(appApiRest.get('port'), () => {
    console.log(`Servidor escuchando por el puerto ${appApiRest.get('port')}`);
});