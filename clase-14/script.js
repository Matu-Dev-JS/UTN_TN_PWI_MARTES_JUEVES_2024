//VAR LET CONST


//VAR ES5- NO SE USA
//No hay diferencia entre reasignar y redeclarar
//Var tiene hoisting
//Hosing es poder llamar a algun valor antes de su declaracion
//Var por defecto tiene el valor undefined

/*
var apellido = null


//Reasignacion
nombre = 'juan'

//Redeclaracion
var nombre = 'juan'

console.log(nombre)
 */

//LET ES6 (javascript moderno)
//NO Hoisting automatico
//NO puede redeclarse en un mismo bloque
//puedo reasignar
//por defecto incia en undefined

//Hoisting manual, declaro 2 variables, que empiezan por defecto en undefined


//Este es el bloque principal
let nombre_2
let nombre = 'pepe'
let edad = 70


edad = 90
//Si el valor es verdadero la accion se ejecuta
//If (valor) {accion}
if(nombre === 'pepe'){

    //variable local
    let nombre = 'juan'
    let edad = 80
    edad = 100
    {
        edad = 70
    }
    console.log(edad + NaN)
    //Esto es un sub-bloque
    //console.log("hola estoy en un segundo bloque")
}
console.log(nombre)
console.log(edad)

//MALA PRACTICA
/* 
precio = 100
console.log(precio)
 */


//CONST ES6 (javascript moderno)
//No hoisting
//No se puede reasignar
//No se puede dar una inicializacion por defecto (DEBE INICIALIZARCE)
//No se puede redeclarar EN EL MISMO BLOQUE



/* const username = 'pepe'

console.log(username) */

//precio, name, color, age, apellido, genero, id, date, fecha
//main, documento, dni, cantidad, direccion, pais, nacionalidad, estado
//titulo, marca, localidad,provincia, codigo postal, contacto, puestoDeTrabajoo
//articulo


//SOLAMENTE USAMOS LET