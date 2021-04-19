let menu = document.getElementById("menu");
let listaDesordenada = document.createElement("UL");

const fragmentoMenuItems = document.createDocumentFragment();

menuItems = ["Home", "¿Quiénes Somos?", "Nuestra Historia"];
rutasEnlaces = ["index.html", "home.html", "#"];

//texto.innerHTML = objMenuItems[1].quienesSomos;
for (let i = 0; i < menuItems.length; i++) {

    let elementoLista = document.createElement("LI");
    let enlaces = document.createElement("a");
    let texto = document.createElement("p");

    texto = menuItems[i];
    texto.innerHTML = enlaces.href = rutasEnlaces[i];
    enlaces.innerHTML = texto;
    elementoLista.appendChild(enlaces);
    fragmentoMenuItems.appendChild(elementoLista);

}

//console.log(fragmentoMenuItems);// --> verifico que si esten los datos correspondientes
console.log(fragmentoMenuItems);
listaDesordenada.appendChild(fragmentoMenuItems);

menu.appendChild(listaDesordenada);