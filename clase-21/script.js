const btnMenu = document.getElementById('btn-menu')
const navMobible = document.querySelector('.nav-mobible')
btnMenu.addEventListener('click', function(){
    navMobible.classList.toggle('hidden')
})

//USER: nombre, email, remuneracion, puesto, tipo_contrato

const users = [
    {
        nombre: 'Luis',
        email: 'GmI7t@example.com',
        remuneracion: 2000,
        puesto: 'Programador',
        tipo_contrato: 'Indefinido',
        id: 1
    },
    {
        nombre: 'Carlos',
        email: 'jFpCf@example.com',
        remuneracion: 3000,
        puesto: 'Diseñador',
        tipo_contrato: 'Indefinido',
        id: 2
    },
    {
        nombre: 'Ana',
        email: 'jFpCf@example.com',
        remuneracion: 4000,
        puesto: 'Programador',
        tipo_contrato: 'Temporal',
        id: 3
    },
    {
        nombre: 'Pedro',
        email: 'jFpCf@example.com',
        remuneracion: 5000,
        puesto: 'Gerente',
        tipo_contrato: 'Indefinido',
        id: 4
    }
]

//Dame una lista con todos aquellos usuarios que sean programadores

/* const programadores = []

for(let usuario of users){
    if(usuario.puesto === 'Programador'){
        programadores.push(usuario)
    }
}
console.log(programadores) */

/* function filtrarProgramadores (usuarios) {
    const programadores = []
    for(let usuario of usuarios){
        if(usuario.puesto === 'Programador'){
            programadores.push(usuario)
        }
    }
    return programadores
}

let resultado = filtrarProgramadores(users)


console.log(resultado) */



//Traeme a los que cobran mas de 2500

/* function filtrarUsuariosPorRemuneracion (usuarios, remuneracion){
    const usuariosFiltrados = []
    for(const usuario of usuarios){
        if(usuario.remuneracion > remuneracion){
            usuariosFiltrados.push(usuario)
        }
    }
    return usuariosFiltrados
}

console.log(filtrarUsuariosPorRemuneracion(users, 2500))
 */

//La logica de filtrar elementos x condicion es la misma?


//Principio DRY: 'Dont repeat yourself' o 'no te repitas'

//la lista es el array a recibir []
//callbackFnCondicion es una FUNCION recibida por parametro que devolvera la condicion
/* function filtrar (lista, callbackFnCondicion){
    const result = []
    for(const elemento of lista){
        //Invoco a mi funcion y le paso el elemento
        if(callbackFnCondicion(elemento)){
            result.push(elemento)
        }
    }
    return result
}


function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 3500
}

function condicionDiseñadores (usuario){
    return usuario.puesto === 'Diseñador'
}

let usuariosRemuneracionAlta = filtrar(users, condicionRemuneracionCaros)

console.log(usuariosRemuneracionAlta)

let diseñadores = filtrar(users, condicionDiseñadores)

console.log(diseñadores) */

//Los arrays tienen metodos


/* function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 3500
} */

//filter
/* const resultado = users.filter(condicionRemuneracionCaros) */

/* console.log(resultado) */


//Callback es una funcion pasada por parametro

//Ejemplo de callback con funcion anonima
const resultado = users.filter(
    function(usuario){
        return usuario.remuneracion > 2500
    }
)

//si un usuario tiene incluido en su nombre la C

//En vez de hacer esto 🤮
const resultado2 = users.filter(
    function(user){
        return user.nombre.includes('C')
    }
)

//podria hacer:

const resultado3 = users.filter((usuario) => usuario.nombre.includes('C') )

//O tambien
//Solo es valido SI la funcion en flecha recibe 1 parametro
const resultado4 = users.filter(usuario => usuario.nombre.includes('C') )

console.log(resultado2)


//Productos: precio, nombre, stock, descripcion, id

const products = [
    {
        precio: 2000,
        nombre: 'Laptop',
        stock: 40,
        id: 1,
        descripcion: 'Laptop de 15 pulgadas'
    },
    {
        precio: 3000,
        nombre: 'Tablet',
        stock: 3,
        id: 2,
        descripcion: 'Tablet de 10 pulgadas'
    },
    {
        precio: 4000,
        nombre: 'Monitor',
        stock: 2,
        id: 3,
        descripcion: 'Monitor de 15 pulgadas'  
    },
    {
        precio: 5200,
        nombre: 'Monitor',
        stock: 2,
        id: 80,
        descripcion: 'Monitor de 25 pulgadas'  
    },
    {
        precio: 5000,
        nombre: 'Mouse',
        stock: 10,
        id: 4,
        descripcion: 'Mouse'
    },
    {
        precio: 6000,
        nombre: 'Teclado',
        stock: 70,
        id: 5,
        descripcion: 'Teclado'
    },
    {
        precio: 7000,
        nombre: 'Audifonos',
        stock: 4,
        id: 6,
        descripcion: 'Audifonos'
    }
]

//Filtrar por los productos que su stock sea mayor o igual a 5

//Filtrar por los productos que su precio este entre 4500 y 5500

//Filtrar por los productos que su descripcion contenga la palabra 'Moni'



//ARROW FUNCTIONS / FUNCIONES EN FLECHA:

//Las funciones en flecha son una forma distinta y mejor de hacer las funciones en JS, cuentan con las siguientes ventajas:

//Funcion normal o funcion ES5/commonJS
/* function saludar(nombre){
    alert('hola ' + nombre)
} */


//Arrow function o funcion en flecha ES6

const saludar = (nombre) => {
    alert('hola ' + nombre)
}


//mejoras:

//Retorno implicito (Solo funciona si NO hay llaves)

const sumar = (a, b) =>  a + b
//Es lo mismo que:
const sumar2 = (a, b) => {return a + b}



console.log(sumar(8, 8))

/* function condicionRemuneracionCaros (usuario){
    return usuario.remuneracion > 3500
}

const condicionRemuneracionCaros = ( usuario ) => usuario.remuneracion > 3500 */

//Cuando conviene usar retorno implicito?

//CASO Funcion 1 NO CONVIENE USAR RETORNO IMPLICITO
//Quiero mostrar por alerta un hola 
//Solicitar un nombre
//Despedirse por consola
//Devolvera true

const doAction = ( ) =>{
    alert('hola')
    let nombre = prompt('Ingresa tu nombre')
    console.log('chau')
    return true
}


//CASO Funcion 2 CONVIENE USAR RETORNO IMPLICITO
//Quiero una funcion que reciba un valor y me diga si el typeof es string

const validateString = (value) => typeof(value) === 'string'

const validateString2 = (value) => {
    return typeof(value) === 'string'
} 



//Metodos de array:

//FILTER Filtrar a los los elementos por x condicion
//DEVUELVE ARRAY SIEMPRE (incluso si nadie cumple la condicion)
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces sera agregado al array

users.filter(user => user.email === 'pepito@gmail.com')
//Devuelve: [usuarios que cumplan con la condicion]


//FIND Buscar UN elemento dentro del array
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces CORTARA la ejecucion de find y retornara dicho elemento. Si nadie cumple la condicion, retornara undefined

const usuarioBuscado = users.find((user) => user.id === 10)

//Devuelve: usuario que cumple la condicion | undefined


//FINDINDEX Buscar UN indice de x elemento dentro del array
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces CORTARA la ejecucion de findIndex y retornara LA POSICION EN EL ARRAY dicho elemento. Si nadie cumple la condicion, retornara -1

const usuarioIndice = users.findIndex((user) => user.id === 10)
console.log(usuarioIndice)

//Devuelve: posicion usuario que cumple la condicion | -1

//SOME Ver si almenos UN usuario cumple con x condicion
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor verdero, entonces CORTARA la ejecucion de some y retornara un true. Si nadie cumple la condicion, retornara false

let hayUnDiseñador = users.some(user => user.puesto === 'Diseñador')
console.log(hayUnDiseñador)

//Devuelve un boolean


//EVERY Ver si todos los elementos cumplen con x condicion
//Recibe callback (funcion) y ejecutara la callback por cada elemento del array y el elemento que cuando sea pasado a la callback, de un valor falsy, entonces CORTARA la ejecucion de every y retornara un false. Si TODOS cumplen la condicion, retornara true

let todosTienenPuesto = users.every((user) => user.puesto.length > 0)

//FOREACH Ejecuta una callback por cada elemento de mi array (Basicamente un for of pero como metodo)
//DEVUELVE undefined SIEMPRE
users.forEach((user) => {
    console.log(user.nombre)
})


//MAP MAS DIFICIL DE TODOS



