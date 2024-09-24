/* CONSINGAS

EJERCICIOS DE JS Y CONDICIONES:
1. Sumar dos números:
Pide al usuario dos números, y luego muestra la suma usando un alert.
2. Juego de adivinanza:
Crear una variable interna llamada, numero_secreto
Pide al usuario que adivine un número secreto entre 1 y 10. Si adivina correctamente, muestra un mensaje de éxito por alerta, sino, veremos si el numero seleccionado es mayor o menor al numero secreto, si es mayor diremos 'te pasaste' si es menor diremos 'un poquito mas..'
3. Verificar edad:
Pide al usuario su edad, si tiene 18 años o más, le dice que es mayor de edad, si no, le dice que es menor de edad.
*/

/* 1 */
/* CASO CORRECTO CON VALIDACIONES */
/* 
let num1 = prompt('ingrese el primer numero');

while(!num1 || isNaN(num1)){
    num1 = prompt('Error, dato no valido, ingresa nuevamente')
}

let num2 = prompt('ingrese el segundo numero');
while(!num2 || isNaN(num2)){
    num2 = prompt('Error, dato no valido, ingresa nuevamente')
}
num1 = Number(num1)
num2 = Number(num2)
let resultado = num1 + num2

let mensaje = `el resultado de la suma de ${num1} y ${num2} es ${resultado}`
//Alternativa template string
alert(mensaje);
//Alternativa usando concatenaciones
alert('el resultado de la suma de ' + num1 + ' y ' + num2 + ' es ' + resultado);
 */
/* 2 */
/* let num_secret = 3

while(true){

    let respuesta = prompt('Adivine el Numero secreto del 1 al 10')

    if(isNaN(respuesta)){
        alert('Error Ingrese un dato tipo numero.')
    }
    else if(Number(respuesta) < 1 || Number(respuesta) > 10){
        alert('Error Ingrese un numero que se encuentre 1 y 10.')
    }
    else if( Number(respuesta) < num_secret ){
        alert('Un poquitito mas.')
    }
    else if(Number(respuesta) > num_secret){
        alert('Te pasaste.')
    }
    else if (Number(respuesta) === num_secret){
        alert('Corresto ese es el Numero')
        //Rompe el bucle
        break
    }
}
 */
/* 3 */

/* let edad = prompt('Ingresa tu edad')
if(edad === null){
    alert('Has cancelado el proceso')
}
else if (!edad || isNaN(edad)||Number(edad) <= 0) {
    alert('Error, dato no valido')
}
else if(Number(edad) >= 18){
    alert('Eres mayor de edad')
}
else if(Number(edad) < 18){
    alert('Eres menor de edad')
} */