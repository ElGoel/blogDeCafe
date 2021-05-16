// para seleccionar contenido las 3 mas comunes son

// querySelector
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll la diferencia entre este y querySelector es que este retorna de 0 a todos los elementos disponibles
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById

// const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un nuevo Enlace
const nuevoEnlace = document.createElement('A'); //recomendado que el nuevo elemento sea en mayusculas

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
// Agregar la Clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// Eventos

// console.log(1);
// // load espera a que el JS y los archivos que dependen del HTML estén listos
// window.addEventListener('load', function() {
//     console.log(2);
// })

// // Solo espera que se descargue el HTML, pero no espera el CSS o imagenes
// // este es mas optimo
// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function(evento) {
//     console.log(evento);
//}

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     // El preventDefault evita que los eventos hagan su accion por default
//     // es util para validar un formulario NUNCA OLVIDAR
//     console.log('Enviando formulario');
// })

// Eventos de los imputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El Evento de Sutmit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('todos los campos son obligatorios', true)

        return; // return corta la ejecucion del código
    }


    //Crear la alerta de Enviar Correctamente
    mostrarAlerta('Su mensaje ha sido enviado con exito');

})
// en la practica es mas practico utilizar sudmit cuando se trate de formularios


function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}
// esta forma es muy util para validar inputs y se puede reutilizar
// los nombres del objeto deben tener los mismos nombres de los id
// guardar este codigo!!!

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta)

     // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}

// Es recomendable realizar un codigo feo pero que funcione
// y luego entenderlo y aplicarle el refactory