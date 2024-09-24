//FUNCIONES

/* alert() */

//Declaramos la funcion saludar
/* function saludar () {
    alert('Este es el mejor saludo del mundo 😎🎇!')
}

//Invocamos a la funcion saludar
saludar() */

//Crear la funcion preguntarNombre que solcitara el nombre al usuario y dira por alerta, 'tu nombre es {nombre_ingresado}'let nombre_de_usuario = prompt("¿Cuál es tu nombre?")


function saludar ( nombre ) {
    alert(`Que tal ${nombre} 😎🎇!`)
}
let nombreUsuario = 'juan'

/* saludar('pepe')
saludar('maria')
saludar(nombreUsuario) */

function calcularIva (precio){
    return precio * 1.21
    
}

alert('El iva de tu producto es ' + calcularIva(700))
document.write('El iva de tu producto es ' + calcularIva(700))
function calcularPrecioSinIva ( precio ){
    alert('El iva de tu producto es ' + ( precio - precio * 0.21))
}

/* calcularIva(100)
calcularIva(10) */
/* calcularPrecioSinIva(2000) */

/* 
f(x) = 2x + 1 
x = 2   | 2.2 + 1 = 5
x = 3   | 2.3 + 1 = 7
*/

function sumar (a, b){
    return Number(a) + Number(b)
}

/* sumar(70, 30)

sumar(70, 30) */
let resultado = sumar(70, 30)
/* alert(resultado) */
/* console.log(resultado) */
/* document.write(resultado) */

document.write(`
    <h1 class='titulo'>
        Hola
    </h1>
    `)