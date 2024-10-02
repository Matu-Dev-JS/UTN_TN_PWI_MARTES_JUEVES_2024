
let mensaje = 'Hola a todos, mi nombre es Alejandro'


//Esta incuido la palabra 'nombre' dentro del mensaje

//string.includes(strBuscado) nos devuelve un booleano que indica si el strBuscado esta incluido dentro del string
//console.log(mensaje.includes('Hola a todos'))

let categoria = 'Tecnologia'

//Queremos tranformar a categoria a minuscula o mayuscula

/* console.log(categoria.toLowerCase())
console.log(categoria.toUpperCase()) */

/* 
let mensajeBuscado = 'hOla'

console.log(mensaje.toLowerCase().includes(mensajeBuscado.toLowerCase())) */

let titulo = 'Tv Samsung 32 pulgadas'

//console.log(titulo.toLowerCase().includes('tv'))


//Quiero que mi titulo sea url-friendly, osea los espacios ' ' transformalos a '-'
//string.replace(valorBuscado, valorNuevo) busca un string y lo reemplaza (solo una vez) DEVUELVE STRING
//console.log(titulo.replace(' ', '-'))

//string.replaceAll(valorBuscado, valorNuevo) busca un string y lo reemplaza (muchas veces) DEVUELVE STRING
//console.log(titulo.replaceAll(' ', '-'))

/* let codigo1 = '11-2-PROD-12/03/24'
let codigo2 = '12-5-SERV-11/03/24'
let codigo3 = '30-2-TRANS-10/03/24' */

const codigos = [
    '11-2-PROD-12/03/24',
    '12-5-SERV-11/03/24',
    '30-2-TRANS-10/03/24'
]

//string.split() nos transforma un string en un array
//Ejemplo codigo = ['11', '2', 'PROD', '12/03/24']


//console.log(codigo.split(''))



/* function transformarCodigo (codigo){
    let codigo_partido = codigo.split('-')

    const datosElemento = {
        codigo: codigo_partido[0],
        area: codigo_partido[1],
        tipo: codigo_partido[2],
        fecha_creacion: codigo_partido[3] 
    }
    return datosElemento
}

for(let codigo of codigos){
    console.log(transformarCodigo(codigo))
} */

let codigo_partido = ['11', '2', 'PROD', '12/03/24']

//array.join() le podes pasar el string con el que se uniran los elementos del array

//console.log(codigo_partido.join('-'))

/* let codigo = ''
for(let elemento of codigo_partido){
    codigo = codigo + '-' + elemento
}
codigo = codigo.replace('-', '')
console.log(codigo) */

/* 
codigo elemento-codigo area-tipo elemento-fecha_creacion  
fecha_creacion = dia/mes/anio

*/

let string = 'pepe'

//Quiero saber cuantos caracteres tiene el string
console.log('Mi string tiene ' + string.length)


//Quiero saber cual es el primer caracter del string
//console.log(string[0])
//console.log(string.charAt(0))

//console.log(string.repeat(3))

//let rating = 3
//console.log('⭐'.repeat(rating))