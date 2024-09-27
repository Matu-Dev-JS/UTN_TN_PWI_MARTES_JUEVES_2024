//Arrays metodos y metodos avanzados 
//Lista de elementos ordenada
//              0        1        2
let alumnos = ['pepe', 'maria', 'juan']
let notas = [9, 3, 5]


//SINONIMOS: array, arreglos, listas, matrices, colecciones, collection, list

//Reasignar un valor en un array
//alumnos[1] = 'pepito'

//Eliminar una propiedad ❌mala practica
//delete alumnos[1]

//Creando valores en posiciones no existentes ❌mala practica
//alumnos[5] = 'pedrito'

//.length es una propiedad intrinseca de los arrays, significa longitud y nos dice cuanto es la cantidad de elementos en la lista

let mails = [
    'pepe@gmail.com',//0
    'juan@gmail.com',
    'maria@gmail.com',//2
    'pedrito@gmail.com',//3
    'julieta@gmail.com'
]

/* 
Por cada mail de la lista quiero que por consola diga, mail enviado a {x direccion}
*/

//Este codigo es poco escalable🤮
/* 
console.log( `Mail enviado a ${mails[0]}` )
console.log( `Mail enviado a ${mails[1]}` )
console.log( `Mail enviado a ${mails[2]}` ) 
*/

//mails.length = cantidad de veces que deberemos repetir el mensaje por consola
for (let posicion = 0; posicion < mails.length; posicion = posicion + 1) {
    let mail = mails[posicion]
    console.log('La posicion actual es ' + posicion)
    console.log(`Mail enviado a ${mail}`)
}
/* 
let productos_vendidos_hoy = [
    'teclado',
    'monitor',
    'celular'
] */

//FOR OF: se usa para recorrer arrays

/* for (let producto of productos_vendidos_hoy) {
    document.write(
        `<div>
            <h3> Has vendido ${producto} exitosamente 😎</h3>
            <button>Ver estado de entrega</button>
            <hr/>
        </div>`
    )
} */
/* Por cada producto vendido deberas mostrar una alerta que diga 'Has vendido {producto} exitosamente 😎🎇👻' */

/* 
Por cada producto vendido vamos a usar un document.write() donde pasaremos un string con el siguiente formato
`<div>
    <h3>{nombre}</h3>
    <button>Ver estado de entrega</button>
    <hr/>
</div>`
*/


let productos = [
    {
        titulo: 'tv samsung 32"',
        precio: 400000,
        id: 1,
        descripcion: 'Es una tv normal, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 42"',
        precio: 600000,
        id: 2,
        descripcion: 'Es una tv normal pero mas grande, no hay mucho que decir.'
    },
    {
        titulo: 'tv samsung 50"',
        precio: 800000,
        id: 3,
        descripcion: 'Es una tv normal pero mucho mas grande, no hay mucho que decir.'
    }
]

//Por cada producto generar un div con la sig estructura:
/* 
`
<div>
    <h3>${titulo}</h3>
    <p>{descripcion}</p>
    <span>Precio: <b>$${precio}</b></span>
    <button>Comprar</button>
    <hr/>
</div>
`
*/

//METODOS DE ARRAY (acciones asociadas al prototipo de los arrays)

//PUSH: sirve para agregar elementos al final del array
/* productos.push(
    {
        titulo: 'nuevo producto',
        precio: 3000,
        id: 4,
        descripcion: 'lorem ipsum'
    }
        
) */

//Sirve para agregar un elemento al principio del array
/* 
productos.unshift(
    {
        titulo: 'nuevo producto',
        precio: 3000,
        id: 4,
        descripcion: 'lorem ipsum'
    }
) */


//POP: Eliminar el ultimo elemento del array y lo retorna
/* let producto_eliminado = productos.pop()

console.log('Has eliminado a ',  producto_eliminado) */

//SHIFT: Elimina el primer elemento del array y lo retorna

/* let producto_eliminado = productos.shift()

console.log('Has eliminado a ',  producto_eliminado) */

/* productos.shift() */

//indexOf: buscar el indice de un elemento del array si no encuentra el elemento devolvera -1

/* let nombres = ['pedro', 'maria', 'ragnar']
nombres[nombres.indexOf('ragnar')]='thor' */
/* console.log(nombres.indexOf('ragnar')) */

//includes: Saber si un elemento esta incluido en el array (devuelve un boolean)

/* let carrito = ['tv', 'empanadas', 'vaso']

console.log(carrito.includes('celular')) */

/* let categorias_disponibles = ['tecnologia', 'hogar', 'deporte']

let categoria_solicitada = prompt('Ingrese la categoria del nuevo producto')

if(categorias_disponibles.includes(categoria_solicitada)){
    alert("Perfecto")
}
else{
    alert('ERROR: categoria no disponible')
} */

//splice: eliminar, agregar, reemplazar elementos dentro de un array
/* let nombres = ['pedro', 'maria', 'ragnar'] */
//eliminar a maria
//nombres.splice(1, 1)

//Agregar a belen en la posicion de maria
//nombres.splice(1, 0, 'belen')

//Reemplazar a belen en la posicion de maria
/* nombres.splice(nombres.indexOf('maria'), 1, 'belen') */
/* console.log(nombres)
 */

console.log(productos)


for(let producto of productos){
    document.write(
        `
        <div>
            <h3>${producto['titulo']}</h3>
            <p>${producto.descripcion}</p>
            <span>Precio: <b>$${producto.precio}</b></span>
            <button>Comprar</button>
            <hr/>
        </div>
        `
    )
}

/* let nombres = ['pepe', 'juan', 'pedro']

let nuevoNombre = prompt('ingresa el nombre')
nombres.push(nuevoNombre)

console.log(nombres) */