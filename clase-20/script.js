const btnRegisterHTML = document.getElementById('btn-register')
const modalHTML = document.querySelector('.modal-container')
const btnCloseModalHTML = document.querySelector('.btn-close')

function openModal (evento){
    console.log(evento)
    modalHTML.classList.remove('hidden')
}
function closeModal (){
    modalHTML.classList.add('hidden')
}


btnRegisterHTML.addEventListener('click', openModal)
btnCloseModalHTML.addEventListener('click', closeModal)

const teclasTocadas = []

function capturarTecla (evento) {
    //El evento es un objeto con datos del evento, OJO, ese objeto suele cambiar entre distintos tipos de eventos
    console.log(evento)
    teclasTocadas.push(evento.key)
    if(evento.key == 'p'){
        console.log('El juego esta en pausa')
    }
    else if(evento.key == 'w'){
        console.log('Estas yendo hacia adelante')
    }
}

function capturarSalidaTecla () {
    console.log('el usuario salio de una tecla')
}

document.addEventListener('keydown', capturarTecla)
/* document.addEventListener('keyup', capturarSalidaTecla) */
/* 
Evento pasando una funcion anonima
btnCloseModalHTML.addEventListener('click', function(){
    modalHTML.classList.add('hidden')
}) */

const titleHTML = document.querySelector('.title')

titleHTML.oncopy = function(evento){
    evento.preventDefault()
}

const inputHTML = document.querySelector('.input')
const btnVer = document.querySelector('.btn-ver')

btnVer.onclick = function () {
    inputHTML.type = 'text'
}

const formularioHTML = document.getElementById('formulario')

function enviarFormulario(evento){
    evento.preventDefault()
    const formulario = evento.target
    console.log(formulario.nombre.value)
    //LOS FORMULARIOS POR DEFECTO RECARGAN LA PAGINA
    console.log('se envio el formulario')
}

formularioHTML.addEventListener('submit', enviarFormulario)