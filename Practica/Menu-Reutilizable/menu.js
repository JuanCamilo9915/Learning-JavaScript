let menu = document.getElementById("menu");
let imagenUcc = document.createElement("img");
let listaDesordenada = document.createElement("UL");

//const fragmentoMenuImag = document.createDocumentFragment();
const fragmentoMenuItems = document.createDocumentFragment();

menuItems = ["./resources/homemenu.png", "¿Quiénes Somos?", "Nuestra Historia"];
rutasEnlaces = ["index.html", "home.html", "#"];

let rutaImagenLogoUcc = imagenUcc.src = "./resources/logoucc.png";
imagenUcc.innerHTML = rutaImagenLogoUcc;
imagenUcc.classList.add('logo');

//texto.innerHTML = objMenuItems[1].quienesSomos;
for (let i = 0; i < menuItems.length; i++) {

   let elementoLista = document.createElement("LI");
   let enlaces = document.createElement("a");

   if (i == 0) {
      enlaces.attributes = enlaces.href = rutasEnlaces[i];

      let imagenHome = document.createElement("img");
      let rutaImagenHome = menuItems[i];
      imagenHome.innerHTML = imagenHome.src = rutaImagenHome;
      imagenHome.classList.add('home');//Añade una clase al elemento html
      enlaces.appendChild(imagenHome);
      elementoLista.appendChild(enlaces);
      fragmentoMenuItems.appendChild(elementoLista);
   } else {
      let texto = document.createElement('p');

      texto.innerHTML = menuItems[i];
      enlaces.href = rutasEnlaces[i];
      enlaces.appendChild(texto);
      elementoLista.appendChild(enlaces);
      fragmentoMenuItems.appendChild(elementoLista);
   }

}

//console.log(fragmentoMenuItems,fragmentoMenuImag);// --> verifico que si esten los datos correspondientes
//console.log(fragmentoMenuItems);
listaDesordenada.appendChild(fragmentoMenuItems);

menu.appendChild(imagenUcc);
menu.appendChild(listaDesordenada);