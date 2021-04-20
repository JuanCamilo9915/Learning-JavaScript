let menu = document.getElementById('menu-desplegable');
let listaDesordenada = document.createElement('ul');
let listaDesordenada2 = document.createElement('ul');

const fragmentoLista = document.createDocumentFragment();
const fragmentoLista2 = document.createDocumentFragment();
const fragmentoLista3 = document.createDocumentFragment();

let lista = ["Home", "Sobre Nosotros", "Noticias", "Destacados", "Estadisticas", "Mas Opciones"];
let lista2 = ["Perfil", "Ajustes Cuenta", "Cerrar Sesión"];

for (let i = 0; i < lista2.length; i++) {

    let elementoO2 = document.createElement('li');
    let textoPp2 = document.createElement('p');
    textoPp2.innerHTML = lista2[i];
    elementoO2.appendChild(textoPp2);
    fragmentoLista3.appendChild(elementoO2);
    /*let elementoO = document.createElement('li');
    let textoPp = document.createElement('p');
    textoPp.innerHTML = lista[i];
    elementoO.appendChild(textoPp);
    fragmentoLista.appendChild(elementoO);*/
    
}

for (let j = 0; j < lista.length; j++) {

    let elementoO2 = document.createElement('li');
    let textoPp2 = document.createElement('p');
    textoPp2.innerHTML = lista2[j];
    elementoO2.appendChild(textoPp2);
    fragmentoLista.appendChild(elementoO2);
    /*let elementoO2 = document.createElement('li');
    let textoPp2 = document.createElement('p');
    textoPp2.innerHTML = lista2[j];
    elementoO2.appendChild(textoPp2);
    fragmentoLista2.appendChild(elementoO2);*/
    
}

console.log(fragmentoLista);
console.log(fragmentoLista2);

for (let x = 0; x < lista.length; x++) {
    
    if (x == 5) {
        let elementoLi = document.createElement('li');
        let textPLi = document.createElement('p');
        textPLi.innerHTML = lista[x];
        elementoLi.appendChild(textPLi);
        elementoLi.appendChild(listaDesordenada2);
        fragmentoLista2.appendChild(elementoLi);
    }
    
}

listaDesordenada2.appendChild(fragmentoLista3);
fragmentoLista2.appendChild(listaDesordenada2);
fragmentoLista.appendChild(fragmentoLista2);
listaDesordenada.appendChild(fragmentoLista);
//listaDesordenada2.appendChild(fragmentoLista2);

menu.appendChild(listaDesordenada);
//menu.appendChild(listaDesordenada2);