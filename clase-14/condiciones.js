//FUNCIONES NATIVAS

//PopUp con un mensaje
/* alert('hola') */
//PopUp con un input para mandar datos
//PROMPT puede devolver string o null
//Devuelve string si el usuario da al boton de aceptar
//Devuelve null si el usuario da al boton de cancelar
//Cuando el usuario de aceptar el valor se devolvera/retornara
/* let resultado = prompt('hola soy un prompt')


if(!resultado){
    alert("ERROR: no escribiste nada")
}

//Else SIEMPRE debe ir despues de un IF

if(resultado === 'pepe'){
    alert("Vos sabes js, no?")
}
else{
    alert('Queres aprender JS?')
} */


/* let edad = prompt('dime tu edad') */
//NO PUEDE SER 0 la edad

//ESTO ES BUENO
/* 
//A ESTO LO LLAMAMOS ELSE IF ANIDADO
if(!edad){
    alert('ERROR dato no valido')
}
else{
    if(Number(edad) <= 0){
        alert('ERROR edad no puede ser 0 o menor')
    }
    else{
        if(Number(edad) === 88){
            console.log('ERROR edad no puede ser 88')
        }
        else{
            alert('EDAD INGRESADA CORRECTAMENTE')
            alert('Tu edad es ' + edad + ' 😎')
            //TEMPLATE STRING
            alert(`Tu edad es ${edad} 🧐 buen trabajo`)
        }
    }
} */


//PERO PODRIA SER MEJOR...

//Esto es un else if (guard clauses)

/* if(!edad){
    alert('ERROR dato no valido')
}
else if(Number(edad) <= 0){
    alert('ERROR edad no puede ser 0 o menor')
}
else if(Number(edad) === 88){
    alert('ERROR edad no puede ser 88')
}
else if(isNaN(edad)){
    alert('ERROR el dato DEBE ser numerico')
}
else{
    alert('EDAD INGRESADA CORRECTAMENTE')
    //TEMPLATE STRING
    alert(`Tu edad es ${edad} 🧐 buen trabajo`)
} */

//SI NO ME CREES MIRA ESTO: https://miro.medium.com/v2/resize:fit:720/format:webp/1*rcF-TRntYz8Eo-0qJ4NPWQ.jpeg

//isNaN
//Funcionamiento interno
//String(Number('hola10')) === 'NaN'

//WHILE
/* 
while(true){

    console.log('hola ')
} */


/* 
let precio = prompt('ingrese un precio')

while(!precio || isNaN(precio)) {
    if(precio === null){
        //Corta la ejecucion del bucle
        break
    }
    alert('Error dato invalido')
    precio = prompt('Ingrese nuevamente')
}

if(precio === null){
    alert('has cancelado el proceso')
}
else{
    alert('precio ingresado correctamente')
}
 */

let eresHumano = confirm('Eres un humano?')
if(eresHumano){
    alert('Eres humano')
}
else{
    alert('No que miedo.')
}