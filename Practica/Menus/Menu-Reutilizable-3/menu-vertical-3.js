let menu = document.getElementById('menu-desplegable');

let listaUl = document.createElement('ul');
listaDesordenada(listaUl, 1);//Se le añade la clase listaPrincipal
let listaUl2 = document.createElement('ul');
listaDesordenada(listaUl2, 2);//Se le añade la clase subLista
let navegacion = document.createElement('nav');
navegacionNav(navegacion);//Se le añade la clase nav-menu

let listaItems = ["Home", "Sobre Nosotros", "Noticias", "Destacados", "Estadisticas", "Mas Opciones"];
let listaItems2 = ["Perfil", "Ajustes Cuenta", "Cerrar Sesión"];

const listaItemsP3 = document.createDocumentFragment();//Parrafos
const listaItemsP5 = document.createDocumentFragment();//Parrafos
const elementoLi3 = document.createDocumentFragment();//Elemento LI
const elementoLi5 = document.createDocumentFragment();//Elemento LI
const listaItemsP1 = document.createDocumentFragment();//Parrafo Separado
const elementoLi1 = document.createDocumentFragment();//Elemento LI Separado
const fragmentnav = document.createDocumentFragment();//Elemento nav
/**************************************************************************************************************/
for (let i = 0; i < listaItems2.length; i++) {

    itemsElementosLi3(i);
}

listaUl2.appendChild(elementoLi3);
/**************************************************************************************************************/
itemsElementosLi1(5);
/**************************************************************************************************************/
for (let i = 0; i < listaItems.length - 1; i++) {
    itemsElementosLi6(i);
}
/**************************************************************************************************************/
function itemsElementosLi3(i) {
    let textoP3 = document.createElement('p');
    textoP3.innerHTML = listaItems2[i];
    listaItemsP3.appendChild(textoP3);

    let elementLi3 = document.createElement('li');
    itemsLi(elementLi3, 3);//Se le agrega la clase a los elementos LI
    elementLi3.appendChild(listaItemsP3);
    elementoLi3.appendChild(elementLi3);
}
/**************************************************************************************************************/
function itemsElementosLi6(i) {
    let textoP5 = document.createElement('p');
    textoP5.innerHTML = listaItems[i];
    listaItemsP5.appendChild(textoP5);

    let elementLi5 = document.createElement('li');
    itemsLi(elementLi5, 6);//Se le agrega la clase a los elementos LI
    elementLi5.appendChild(listaItemsP5);
    elementoLi5.appendChild(elementLi5);
}
/**************************************************************************************************************/
function itemsElementosLi1(i) {
    let textoP1 = document.createElement('p');
    textoP1.innerHTML = listaItems[i];
    listaItemsP1.appendChild(textoP1);
    listaItemsP1.appendChild(listaUl2);

    let elementLi1 = document.createElement('li');
    itemsLi(elementLi1, 6);//Se le agrega la clase a los elementos LI
    elementLi1.appendChild(listaItemsP1);
    elementoLi1.appendChild(elementLi1);
}
/**************************************************************************************************************/
function itemsLi(itemsLi, num) {
    if (num == 3) {
        itemsLi.classList.add('items-3');
    } else {
        itemsLi.classList.add('items-6');
    }
}
/**************************************************************************************************************/
function listaDesordenada(listaDesordenada, num) {
    if (num == 1) {
        listaDesordenada.classList.add('lista-principal');
    } else {
        listaDesordenada.classList.add('sub-lista');
    }
}
/**************************************************************************************************************/
function navegacionNav(navegacion) {
    navegacion.classList.add('nav-menu');
}
/**************************************************************************************************************/
listaUl.appendChild(elementoLi5);
listaUl.appendChild(elementoLi1);

navegacion.appendChild(listaUl);
fragmentnav.appendChild(navegacion);

menu.appendChild(fragmentnav);

//console.log(listaItemsP3);
//console.log(elementoLi3);
//console.log(listaUl2);
//console.log(listaItemsP1);
//console.log(elementoLi1);
//console.log(listaItemsP5);
//console.log(elementoLi5);
//console.log(listaUl);
