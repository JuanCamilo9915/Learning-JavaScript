let menu = document.getElementById('menu-desplegable');

let listaDesordenada = document.createElement('ul');
let listaDesordenada2 = document.createElement('ul');
/*let elementoLista = document.createElement('li');
let textoP = document.createElement('p');
let elementoLista2 = document.createElement('li');
let textoP2 = document.createElement('p');*/

const fragmentoLista = document.createDocumentFragment();
const fragmentoLista2 = document.createDocumentFragment();

array = ["Home", "Sobre Nosotros", "Noticias", "Destacados", "Estadisticas", "Mas Opciones"];
array2 = ["Perfil", "Ajustes Cuenta", "Cerrar Sesión"];

for (let i = 0; i < array.length; i++) {

    switch (i) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:

            console.log('i: ' + i);
            lista1(array, i);

            break;

        default:
            console.log('Lista 2: i: ' + i);
            //listaUl(array,i);
            //let listaDesordenada2 = document.createElement('ul');
            for (let j = 0; j < array2.length; j++) {

                lista2(array, i, array2, j);

            }
            //fragmentoLista.appendChild(fragmentoLista2);
            break;
    }

}

function lista1(array, i) {
    let elementoLista = document.createElement('li');
    let textoP = document.createElement('p');
    textoP.innerHTML = array[i];
    elementoLista.appendChild(textoP);
    fragmentoLista.appendChild(elementoLista);
}
/*
function listaUl(array, i){
    let elementoLista = document.createElement('li');
    let textoP = document.createElement('p');
    textoP.innerHTML = array[i];
    elementoLista.appendChild(textoP);
    //fragmentoLista2.appendChild(elementoLista);
}
*/
function lista2(array, i, array2, j) {

    let elementoLista = document.createElement('li');
    let textoP = document.createElement('p');
    console.log(i + "-" + j);
    if (i == 5 && j == 0) {
        console.log(i + "-" + j);
        textoP.innerHTML = array[i];
        elementoLista.appendChild(textoP);
        fragmentoLista2.appendChild(elementoLista);
    } else {
        let elementoLista2 = document.createElement('li');
        let textoP2 = document.createElement('p');
        textoP2.innerHTML = array2[j];
        elementoLista2.appendChild(textoP2);
        listaDesordenada2.appendChild(elementoLista2);
        elementoLista.appendChild(listaDesordenada2);
        fragmentoLista2.appendChild(elementoLista);
    }

}

console.log(fragmentoLista);
console.log(fragmentoLista2);
fragmentoLista.appendChild(fragmentoLista2);
listaDesordenada.appendChild(fragmentoLista);
//listaDesordenada.appendChild(fragmentoLista2);

menu.appendChild(listaDesordenada);

/*
for (let i = 0; i < array.length; i++) {

    if (i == 5) {
        lista1(array, i);
        let listaDesordenada2 = document.createElement('ul');
        elementoLista.appendChild(listaDesordenada2);
        fragmentoLista.appendChild(elementoLista);
        for (let j = 0; j < array2.length; j++) {

            let elementoLista2 = document.createElement('li');
            let textoP2 = document.createElement('p');
            textoP2.innerHTML = array2[j];
            elementoLista2.appendChild(textoP2);
            listaDesordenada2.appendChild(elementoLista2);
            fragmentoLista2.appendChild(listaDesordenada2);
            elementoLista.appendChild(listaDesordenada2);
            fragmentoLista.appendChild(elementoLista);
        }

    } else {
        lista1(array, i);
    }
}
*/