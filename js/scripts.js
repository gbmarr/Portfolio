"use strict";

// obtengo los elementos de la barra de navegacion del DOM 
const btnMostrar = document.getElementById("btn_mostrarMenu");
const btnOcultar = document.getElementById("btn_ocultarMenu");
const menu = document.getElementById("navigation_bar");

// muestro la barra de navegacion y oculto el boton de despliegue
btnMostrar.addEventListener('click', ()=>{
    btnMostrar.classList.toggle("oculto");
    menu.classList.toggle("oculto");
    btnOcultar.classList.toggle("oculto");
});

// oculto la barra de navegacion, boton x y muestro el boton de despliegue
btnOcultar.addEventListener('click', ()=>{
    btnOcultar.classList.toggle("oculto");
    menu.classList.toggle("oculto");
    btnMostrar.classList.toggle("oculto");
})