let menu = document.getElementById("menu");
let imagen = document.createElement("img");
let listaDesordenada = document.createElement("UL");

const fragmentoMenuImag = document.createDocumentFragment();
const fragmentoMenuItems = document.createDocumentFragment();

menuItems = ["./resources/homemenu.png", "¿Quiénes Somos?", "Nuestra Historia"];

//texto.innerHTML = objMenuItems[1].quienesSomos;
for (let i = 0; i < menuItems.length; i++) {

   if (i == 0) {
      let rutaImagen = imagen.src = menuItems[i];
      console.log(menuItems[i]);
      imagen.innerHTML = rutaImagen;
      imagen.classList.add('home');
      fragmentoMenuItems.appendChild(imagen);
   } else {
      let elementoLista = document.createElement("LI");
      let texto = document.createElement("p");

      texto.innerHTML = menuItems[i];
      //fragmentoMenuItems.appendChild(texto);
      elementoLista.appendChild(texto);
      fragmentoMenuItems.appendChild(elementoLista);
   }

}

console.log(fragmentoMenuItems,fragmentoMenuImag);// --> verifico que si esten los datos correspondientes
listaDesordenada.appendChild(fragmentoMenuItems);

//menu.appendChild(imagen);
//menu.appendChild(fragmentoMenuImag);
menu.appendChild(listaDesordenada);

//let texto = `<p>Hola ahora si pude, jejee</p>`;
//let texto2 = document.createTextNode(`<p>Hola ahora si pude, jejee</p>`);//devuelve solo texto
/*objeto:
objMenuItems = [
   {
      home: 'home'
   },
   {
      quienesSomos: '¿Quiénes Somos?'
   }
];
*/