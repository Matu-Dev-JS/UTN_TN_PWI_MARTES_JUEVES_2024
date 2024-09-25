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

//Esta funcion tiene la responsabilidad de crear el objeto de sesion
function crearSesion (id_usuario, nombre_usuario, origen){
    let sesion = {
        id_sesion: 1, 
        id_usuario: id_usuario,
        nombre_usuario: nombre_usuario,
        origen: origen
    }
    return sesion
}

let sesion1 = crearSesion(8, 'pepe', 'pc personal')


let sesion2 = crearSesion(1, 'maria', 'celular empresa')


mostrarSesion(sesion2)
function mostrarSesion (sesion){
    let sesionHTML = `
    <div class='sesion-item'>
        <span>#ID_SESION:${sesion.id_sesion}</span>
        <h3>El usuario ${sesion.nombre_usuario} inicio sesion desde su ${sesion.origen}</h3>
        <hr/>
    </div>
    `
    document.write(sesionHTML)
}


/* console.log(sesion1, sesion2) */

/* 
EJERCICIO 1:
Crear una funcion llamada crearProducto
la funcion recibira titulo, precio y categoria del producto (parametros)
INICIALMENTE EL PRODUCTO TENDRA stock en 0 y la propiedad estado en false
La funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola

Ejemplo:

crearProducto('tv samsung', 4000, 'Tecnologia')
Devolvera: 
{
    titulo: 'tv samsung',
    precio: 4000,
    categoria: 'Tecnologia',
    stock: 0,
    estado: false
}


EJERCICIO 2:
Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y construira un string con el siguiente formato

`
<div>
    <h3>producto.nombre</h3>
    <span><b>Precio:</b>$producto.precio</span>
    <span><b>Categoria:</b>producto.categoria</span>
</div>
`
Luego dicho string debera pasarse a la funcion document.write()

Ejemplo:
let HTML = `<div></div>`
document.write(HTML)
*/

/* function crearProducto(titulo, precio,categoria){
    let nuevoProducto = {
        'titulo': titulo,
        'precio': 400,
        'categoria': 'medicion',
        'stock': 0,
        'estado': false
    }
    return nuevoProducto
}

let producto1 = crearProducto('mate',400,'insumos')





console.log(crearProducto('pc',400,'insumos'))
 */
/* function crearProducto (titulo, precio, categoria){
    let producto={
        'stock': 0,
        'estado': false,
        'divisa': 'USD'
    }
    producto.titulo = titulo;
    producto.precio = precio;
    producto.categoria = categoria;
    return producto;
}

const producto1 = crearProducto('mate',400,'insumos') */

//Es legal hacer esto?
/* producto1.divisa = 'USD' */
/* 
console.log(producto1) */

/* Object.freeze() */

/* function crearObjeto(titulo, precio,categoria){
    let Objeto = {
        'titulo': titulo,
        'precio': precio,
        'categoria': categoria,
        'stock': 0,
        'estado': false
    }
    return Objeto
}
let Objeto = crearObjeto('calibre',400,'medicion')
console.log(Objeto) */