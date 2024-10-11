const contenedorHTML = document.getElementById('contenedor')
const btnOcultarHTML = document.getElementById('btn-ocultar')


//Cuando le demos click al boton de ocultar, debemos OCULTAR EL DIV CONTENEDOR

//Declaracion
/* function mostrarMensaje (){
    console.log('Has ocultado algo')
} */


function toggleCartel (){
    //El metodo toggle nos permite interpolar una clase
    //Si la clase esta, LA SACA, sino, LA PONE
    contenedorHTML.classList.toggle('hidden')
    //Si el texto interno del boton es 'Ocultar' entonces cambiarlo a "Ver mas" y viceversa

}

//invocar mi funcion
//mostrarMensaje()

//Hay tres formas de manejar eventos en JS:

//Mala practica. 🤮❌
//Asignar la funcion al elemento HTML como atributo


//Esto es mejor practica ✔🎇
//Llamar al boton y asignarle la funcion a la propiedad onclick
//btnOcultarHTML.onclick = mostrarMensaje


//Esto es mejor practica ✔🎇
//Llamar al boton y usar el metodo addEventListenner para darle el evento y la funcionalidad
btnOcultarHTML.addEventListener('click', toggleCartel)




const txtOcultoHTML = document.getElementById('txt-oculto')
const btnShowTxtHTML = document.getElementById('btn-show-txt')

function toggleText() {  
    let estaOculto = txtOcultoHTML.classList.contains('hidden')
    
    //btnShowTxtHTML.innerText = estaOculto ? 'Ver menos' : 'Ver mas'
    /* if(estaOculto){
        btnShowTxtHTML.innerText = 'Ver menos'
    }
    else{
        btnShowTxtHTML.innerText = 'Ver mas'
    } */
    txtOcultoHTML.classList.toggle("hidden");   
    
}
btnShowTxtHTML.addEventListener("click", toggleText);