//Objetos


let nombreUsuario = 'pepe'
let apellidoUsuario = 'suarez'
let edadUsuario = 19
/* 
let propiedadNueva = prompt('ingresame una nueva propiedad a mi objeto')
let valorNuevo = prompt('ingresame el nuevo valor') 
*/

//Objeto literal
let usuario = {
    'nombre': nombreUsuario,
    'apellido': 'suarez',
    edad: 19,
    'esCliente': false, 
    'direccion': {
        'pais': 'AR',
        "provincia": 'Buenos Aires',
    },
    divisa: 'USD',
    /* [propiedadNueva]: valorNuevo */
}

//Creando la propiedad dinero ❌ mala practica
usuario.dinero = 40000
//usuario['dinero']

//Cambiar propiedades
usuario.esCliente = true

//Eliminar propiedad ❌ mala practica (las funciones o codigo dependiente de su objeto fallara si eliminamos propiedad utiles)
delete usuario.divisa



console.log(usuario)

//Si llamo a una propiedad que no existe me mostrara undefined
//console.log(usuario.age)

//Declaracion
function presentarUsuario (persona){
    console.log(`Hola me llamo ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} y mi dinero es ${persona.dinero}`)
}

//Invocacion
presentarUsuario(usuario)

/* let propiedadAMostrar = prompt('Ingrese la clave que quiera mostrar')

alert(usuario[propiedadAMostrar]) */

//Si hacemos esto
//alert(usuario.propiedadAMostrar)
//JS entiende esto
//usuario['propiedadAMostrar']



//Notacion de corchetes
console.log(usuario['nombre'])
console.log(usuario['apellido'])
console.log(usuario['direccion']['pais'])

//Notacion de puntos
console.log(usuario.esCliente)

//Coinsideraciones de la notacion de puntos
//No usar espacios ni -, *, /, %, +, ,
//En vez usar _, & o camelCase

/*  
Crear el objeto producto que tenga las propiedades titulo, precio, id, stock, vendedor
*/

let producto = {
    'titulo completo': 'teclado',
    'precio': 20,
    'id': 1,
    'stock': 10,
    'vendedor': {
        'nombre': 'compumundo',
        'id': 1
    },
    'divisa': 'USD'
}