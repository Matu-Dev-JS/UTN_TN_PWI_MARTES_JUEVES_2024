let productos = [
    {
        titulo: 'Coca Cola',
        precio: 1000,
        descripcion: 'bebida energetica',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Sprite',
        precio: 1200,
        descripcion: 'bebida energetica sabor limon',
        stock: 5,
        id: 2
    },
    {
        titulo: 'Fanta',
        precio: 1400,
        descripcion: 'bebida energetica sabor naranja',
        stock: 7,
        id: 3
    },
    {
        titulo: 'Pepsi',
        precio: 900,
        descripcion: 'bebida energetica',
        stock: 4,
        id: 4
    }
]

//hacer una funcion que dado un id me permita obtener un producto por su id y mostrarlo por consola

//Esto es una JSDocs
/**
**   producto_id any parameter es el id del producto a buscar
**   producto obj var es el producto que estoy recorriendo de mi lista de productos
**   productos array var es la lista de productos
** Una funcion que recibe el id del producto, lo busca y lo retorna, sino lo encuentra devolvera undefined
*/

const productos_especiales = [
    {
        titulo: 'Tv samsung',
        precio: 1400,
        descripcion: 'Tevisor samsung',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Tv lg',
        precio: 1200,
        descripcion: 'Tevisor lg',
        stock: 10,
        id: 2
    },
]

//CASO PRINCIPIO DRY
/* function obtenerProductoPorId( producto_id ) {
    //Logica para buscar en la lista de productos por id

    for(let producto of productos){
        if(producto.id === producto_id){
            return producto
        }
    }
}

function obtenerProductoEspecialPorId( producto_id ) {
    //Logica para buscar en la lista de productos por id
    //recorrer el array con un for of
    for(let producto of productos_especiales){
        if(producto.id === producto_id){
            return producto
        }
    }
} */

function obtenerProductoPorId( producto_id, productos ) {
    //Logica para buscar en la lista de productos por id

    for(let producto of productos){
        if(producto.id === producto_id){
            return producto
        }
    }
}

console.log(obtenerProductoPorId(1, productos))
console.log(obtenerProductoPorId(1, productos_especiales))

//Como hago para que mi funcion sea compatible con los productos_especiales y productos

/* let producto_encontrado = obtenerProductoPorId(90)
if(!producto_encontrado){
    console.error('Producto no encontrado')
}
else{
    console.log('Producto encontrado', producto_encontrado)
} */


//Quiero enviar por mail el producto
//Quiero enviar un producto a un servidor


//Una funcion que me permita obtener a todos los productos que su precio sea mayor a 1100
//Esta funcion retornara un array, que estara compuesto de los elementos que cumplan con la condicion de tener un precio mayor a 1100
function obtenerProductosMayoresA (precio) {
    //Esta es la lista donde guardo aquellos productos que cumplan con la condicion
    let array_resultante = []
    for(let producto of productos){
        if(producto.precio > precio){
            array_resultante.push(producto)
        }
    }
    return array_resultante
}


//Ahora hace una funcion que me devuelva a productos que esten entre 100 y 200

//let productosCaros = obtenerProductosMayoresA(1300)

//console.log(productosCaros)

//Crear una funcion que me permita dado un id, obtener la posicion del elemento en el array. SI no lo encuentra debe devolver -1

//obtenerPosicionDelProductoPorId(2) //retorna 1
//obtenerPosicionDelProductoPorId(20) //retornar -1
//Recomendacion: Ver que bucle conviene usar

//Recorrer un array con for: for(let i = 0; i < array.length; i = i + 1)

//Una funcion que se llame hayAlgunProductoConXTitulo que recibira un titulo y nos devolvera true si algun producto tiene ese titulo o false si ninguno lo tiene


const nombres = ['pepe', 'maria', 'juan']

for(let i = 0; i < nombres.length; i = i + 1){
    console.log(i)
    console.log(nombres[i])
}

function obtenerPosicionProductoPorID (prod_ID){
    for (let i = 0; i < productos.lenght; i++){
        if ( productos[i].id === prod_ID){
            return i
        }
    }
    return -1
}

/* 
Sacar el promedio de algo:
const edades = [70, 60, 30, 20, 20, 40, 45]

let sumatoria = 0
for(let edad of edades){
    sumatoria = sumatoria + edad
}
let promedio = sumatoria / edades.length 
*/

/* 
ESTO ESTA BIEN
DRY = Dont repeat yourself

let alturaPersonaUno = prompt('ingrese altura de la primer persona')
let alturaPersonaDos = prompt('ingrese altura de la segunda persona')
let alturaPersonaTres = prompt('ingrese altura de la tercera persona')
let alturaPersonaCuatro = prompt('ingrese altura de la cuarta persona')
let alturaPersonaCinco = prompt('ingrese altura de la quinta persona')
let sumaAlturas = Number(alturaPersonaUno) + Number(alturaPersonaDos) + Number(alturaPersonaTres) + Number(alturaPersonaCuatro) + Number(alturaPersonaCinco)
let promedioAlturas = sumaAlturas / 5
alert('el promedio de las alturas es ' + promedioAlturas) */


/* 
PERO ESTO ESTA MEJOR
function promediarAlturas (cantidad_alturas_a_sumar){ 
    let sumatoria_alturas = 0
    for(let i = 1; i <= cantidad_alturas_a_sumar; i = i + 1){
        let altura = prompt(`ingrese altura de la ${i} persona`)
        sumatoria_alturas = sumatoria_alturas + Number(altura)
    }
    let promedio_alturas = sumatoria_alturas / cantidad_alturas_a_sumar
    return promedio_alturas
}
let resultado_promedio = promediarAlturas(3)
console.log('resultado', resultado_promedio) */