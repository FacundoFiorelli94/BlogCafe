
//QuerySelector - SIEMPRE INICIAN CON "document."
//const heading = document.querySelector('.header__texto h2'); //otra opción es que la etiqueta tenga un ID para el selector
//console.log(heading); //Muestra la linea seleccionda con el "queryselector".
//heading.textContent = 'Nuevo Heading'; //modifica el texto del h2.
//heading.classList.add('Nueva-Clase'); //Crea una nueva clase en la etiqueta del heading en cuestión


//QuerySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces [0].textContent = 'Nuevo Texto para Enlace';
// enlaces [0].classList.add('nueva-clase');
// enlaces (0).classList.remove('navegacion_enlace');


//Generar nuevo enlace
const nuevoEnlace = document.createElement('A');
//Agregar href 
nuevoEnlace.href = 'nuevo-enlance.htm';
//Agregar texto
nuevoEnlace.textContent = 'Creando Nuevo Enlace';
console.log(nuevoEnlace);
//Agegar Class
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al DOM
const navegacion = document.querySelector('.nav');
navegacion.appendChild(nuevoEnlace); //Agrega en la navegación el nuevo elemento


//Eventos
console.log(1);
window.addEventListener('load', function() {// load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});
window.onload = function() {
    console.log(3);
}
document.addEventListener( 'DOMContentLoaded', function() {// Solo espera por el HTML, pero no espera CSS o imagenes
    console. og(4);
});
console.log(5);

//Seleccionar un elementos y asociarles un evento


