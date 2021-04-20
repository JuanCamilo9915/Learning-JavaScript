let menu = document.getElementById('menu-desplegable');

let listaUl = document.createElement('ul');
let listaUl2 = document.createElement('ul');

let listaItems = ["Home", "Sobre Nosotros", "Noticias", "Destacados", "Estadisticas", "Mas Opciones"];
let listaItems2 = ["Perfil", "Ajustes Cuenta", "Cerrar Sesión"];

const listaItemsP3 = document.createDocumentFragment();//Parrafos
const listaItemsP5 = document.createDocumentFragment();//Parrafos
const elementoLi3 = document.createDocumentFragment();//Elemento LI
const elementoLi5 = document.createDocumentFragment();//Elemento LI
const listaItemsP1 = document.createDocumentFragment();//Parrafos
const elementoLi1 = document.createDocumentFragment();//Elemento LI

for (let i = 0; i < listaItems2.length; i++) {

    let textoP3 = document.createElement('p');
    textoP3.innerHTML = listaItems2[i];
    listaItemsP3.appendChild(textoP3);

    let elementLi3 = document.createElement('li');
    elementLi3.appendChild(listaItemsP3);
    elementoLi3.appendChild(elementLi3);
}

listaUl2.appendChild(elementoLi3);

for (let j = 0; j < listaItems.length; j++) {
    //console.log('j: '+j);
    if (j == 5) {
        //console.log('j: '+j);
        let textoP1 = document.createElement('p');
        textoP1.innerHTML = listaItems[j];
        listaItemsP1.appendChild(textoP1);
        listaItemsP1.appendChild(listaUl2);

        let elementLi1 = document.createElement('li');
        elementLi1.appendChild(listaItemsP1);
        elementoLi1.appendChild(elementLi1);
        
    }
}

for (let i = 0; i < listaItems.length - 1; i++) {

    let textoP5 = document.createElement('p');
    textoP5.innerHTML = listaItems[i];
    listaItemsP5.appendChild(textoP5);

    let elementLi5 = document.createElement('li');
    elementLi5.appendChild(listaItemsP5);
    elementoLi5.appendChild(elementLi5);
}

listaUl.appendChild(elementoLi5);
listaUl.appendChild(elementoLi1);

menu.appendChild(listaUl);

//console.log(listaItemsP3);
//console.log(elementoLi3);
//console.log(listaUl2);
//console.log(listaItemsP1);
//console.log(elementoLi1);
//console.log(listaItemsP5);
//console.log(elementoLi5);
//console.log(listaUl);
