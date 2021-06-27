function solicitarDatos(){
    nombre = prompt('¿Cual es tu nombre?');
    apellidos = prompt('¿Cuales son tus Apellidos?');

    usuario = nombre.concat(apellidos);

    //alert(`Mi nombre es: ${nombre.concat(apellidos)}`);
    alert(`Mi nombre es: ${usuario}`);
}