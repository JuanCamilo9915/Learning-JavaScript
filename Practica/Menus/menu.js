/**********************************************Selección del elemento HTML******************************************************/
let menuApp = document.getElementById('menu');

/**********************************************Creación de los elementos HTML******************************************************/
let imagLogoUcc = document.createElement('img');//YA
let naveg = document.createElement('nav');//YA
let listaMenu = document.createElement('ul');//YA
let subListaMenu = document.createElement('ul');//YA

/*****************************************************Logo Ucc**********************************************************/
const fragmentUccLogo = document.createDocumentFragment();//Elemento Logo Ucc

logoUcc(imagLogoUcc, fragmentUccLogo);//Agrega el logo institucional al menu

/*****************************************************Navegación**********************************************************/
navegaMenu(naveg);//Agrega la clase nav-menu

/*****************************************************Lista Desordenada Principal********************************************/
listaPrinMenu(listaMenu);//Agrega la clase lista-principal sub-lista

/*****************************************************Sub-Lista Desordenada********************************************/
subListaMenuDesple(subListaMenu);//Agrega la clase sub-lista

/*****************************************************Listas Desordenadas**********************************************************/
let menuItems = ["../resources/homemenu.png", "¿Quiénes Somos?", "Nuestra Historia", "../resources/masopcionesmenu.png"];
let rutasEnlaces = ["../home-app-ucc/index-home.html", "../home-app-ucc/index-bilioteca.html", "#"];

let subMenuItems = ["Perfil", "Ajustes Cuenta", "Cerrar Sesión"];
let rutasEnlaces2 = ["../home-app-ucc/index-home.html", "../home-app-ucc/index-bilioteca.html", "#"];

/*****************************************************Fragmentos*********************************************************************/
/*Navegación------*/
const fragmentnav = document.createDocumentFragment();//Elemento nav

/*Menú 1 y 2------*/
const fragListaMenu = document.createDocumentFragment();//Elemento menú
const fragSubListaMenu = document.createDocumentFragment();//Elemento sub-menú

/*subListaMenu------*/
const listaItemsP3 = document.createDocumentFragment();//Parrafos
const elementoLi3 = document.createDocumentFragment();//Elemento LI

/*listaMenu-------*/
const listaItemsP4 = document.createDocumentFragment();//Parrafos
const elementoLi4 = document.createDocumentFragment();//Elemento LI

/*Asociando subListaMenu a elemento LI de listaMenu------*/
const listaItemsP1 = document.createDocumentFragment();//Parrafo Separado
const elementoLi1 = document.createDocumentFragment();//Elemento LI Separado

/*****************************************************Funciones*********************************************************************/
/*subListaMenu------------------------------------------------------------------------------------------------------------------*/
function subMenu(textoA2, textoP2, elementoItemLi2, j) {
   textoA2.innerHTML = subMenuItems[j];
   textoP2.appendChild(textoA2);
   listaItemsP3.appendChild(textoP2);//Fragmento

   elementoItemLi2.appendChild(listaItemsP3);
   elementoItemLi2.classList.add('item-subMenu');//Se le agrega la clase item-subMenu
   elementoLi3.appendChild(elementoItemLi2);

   //fragSubMenu(fragsubListaMenu, subListaMenu, elementoLi3);
}

/*listaMenu------------------------------------------------------------------------------------------------------------------*/
function menuHome(home, elementoItemLi, i) {

   let contentA1 = document.createElement('a');
   let contentP1 = document.createElement('p');

   home.innerHTML = home.src = menuItems[i];
   contentA1.href = '#';   
   contentA1.appendChild(home);
   
   contentP1.appendChild(contentA1);
   contentP1.classList.add('items-menu-p');
   listaItemsP4.appendChild(contentP1);//Fragmento

   elementoItemLi.appendChild(listaItemsP4);
   elementoLi4.appendChild(elementoItemLi);
}
/*--//////////////////////////////////////////--*/
function menu(textoP, elementoItemLi, i) {

   let contentA2 = document.createElement('a');

   contentA2.href = '#';
   contentA2.innerHTML = menuItems[i];
   textoP.appendChild(contentA2);
   listaItemsP4.appendChild(textoP);//Fragmento

   elementoItemLi.appendChild(listaItemsP4);
   elementoLi4.appendChild(elementoItemLi);
}

/*Asociando subListaMenu a elemento LI de listaMenu-----------------------------------------------------------------------------*/
function hijoElementoLi(i) {

   let opciones = document.createElement('img');
   let contentA2 = document.createElement('a');
   let contentP2 = document.createElement('p');
   let elementoItemLi1 = document.createElement('li');

   opciones.innerHTML = opciones.src = menuItems[i];
   opciones.classList.add('masOpciones')
   //contentA2.appendChild(opciones);
   contentP2.appendChild(opciones);
   contentP2.classList.add('items-menu-p');
   listaItemsP1.appendChild(contentP2);//Fragmento

   elementoItemLi1.classList.add('items-menu');
   elementoItemLi1.appendChild(listaItemsP1);

   subListaMenu.appendChild(elementoLi3);
   fragSubListaMenu.appendChild(subListaMenu);
   elementoItemLi1.appendChild(fragSubListaMenu);


   elementoLi1.appendChild(elementoItemLi1);

}

/*Asociando el Logo de la Ucc al menu de navegación-----------------------------------------------------------------------------*/
function logoUcc(imagLogoUcc, fragmentUccLogo) {
   imagLogoUcc.innerHTML = imagLogoUcc.src = '../resources/logoucc.png';
   imagLogoUcc.classList.add('logo');//Se le agrega la clase logo
   fragmentUccLogo.appendChild(imagLogoUcc);
}

/*Añadiendo clase de la Lista principal-----------------------------------------------------------------------------*/
function navegaMenu(naveg) {
   naveg.classList.add('nav-menu');
}

/*Añadiendo clase de la Lista Principal-----------------------------------------------------------------------------*/
function listaPrinMenu(listaMenu) {
   listaMenu.classList.add('lista-principal');
}

/*Añadiendo clase de la Sub-Lista-----------------------------------------------------------------------------*/
function subListaMenuDesple(subListaMenu){
   subListaMenu.classList.add('sub-lista');
}
/*****************************************************Bucles*********************************************************************/
/*subListaMenu------------------------------------------------------------------------------------------------------------------*/
for (let j = 0; j < subMenuItems.length; j++) {

   let textoP2 = document.createElement('p');
   let textoA2 = document.createElement('a');
   let elementoItemLi2 = document.createElement('li');

   subMenu(textoA2, textoP2, elementoItemLi2, j);//Se asignan los hijos de los elementos
}

/*listaMenu------------------------------------------------------------------------------------------------------------------*/
for (let i = 0; i < menuItems.length; i++) {

   let elementoItemLi = document.createElement('li');
   elementoItemLi.classList.add('items-menu');

   switch (i) {
      case 0:

         let home = document.createElement('img');
         home.classList.add('home');

         menuHome(home, elementoItemLi, i);

         break;

      case 1: case 2:

         let textoP = document.createElement('p');
         textoP.classList.add('items-menu-p');

         menu(textoP, elementoItemLi, i);//Se asignan los hijos de los elementos

         break;

      default:

         /*Asociando subListaMenu a elemento LI de listaMenu-------------------*/
         hijoElementoLi(i);

         break;
   }

}

/********************************************Anexando Elementos al Header***********************************************************/
listaMenu.appendChild(elementoLi4);
listaMenu.appendChild(elementoLi1);
fragListaMenu.appendChild(listaMenu);

naveg.appendChild(fragListaMenu);
fragmentnav.appendChild(naveg);

menuApp.appendChild(fragmentUccLogo);
menuApp.appendChild(fragmentnav);