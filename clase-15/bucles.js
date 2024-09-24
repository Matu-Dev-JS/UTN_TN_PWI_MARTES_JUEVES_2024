
//FUNCIONES



/* while(!estoyCansado){
    console.log('bailar')
} */
//FOR
//Bucle es una estructura que nos permite repetir acciones/bloques de codigo

//CASO DE BUCLE FOR
//Quiero que por cada usuario de la app envies un mail de terminos y condiciones actualizado
//Cuando queremos usar FOR, cuando queremos repetir una accion una X cantidad de veces

//Por cada usuario de mi app voy a decir en consola 'usuario suscripto'

/* let cantidad_de_usuarios = 30 */

//CONDICION
//Iterador: cantidad de veces que se esta ejecutando la accion
//Condicion / limite: Mientras la condicion sea verdadera el bucle se repetira
//Actualizacion: a que ritmo se va a acutalizar nuestro contador/iterador
/* for(
    let iterador = 1; 
    iterador <= cantidad_de_usuarios; 
    iterador = iterador + 1
){
    //ACCION
    console.log(iterador,'Usuario suscripto')
} */


/* Quiero que me digas por alerta hola 3 veces */

/* for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    alert('hola')
} */

//Solicitar al usuario 3 numeros, y calcularemos la sumatoria de los 3 numeros
/* 
let sumatoria = 0

for(
    let iterador = 1; 
    iterador <= 5;
    iterador = iterador + 1
){
    let numero = prompt('Ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('Error, dato no valido, ingresa nuevamente')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}

alert('La sumatoria de tus numeros es: ' + sumatoria) */

/* 
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 BREAK
6)Imprime los números del 1 al 10, pero salta el 5 CONTINUE
*/

//Break corta el bucle
//Continue pasa a la siguiente operacion


/* for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    if(iterador == 2){
        continue
    }
    console.log(iterador)
} */

//6
/* 
for(
    let i = 1;
    i <= 10;
    i = i++
){
    console.log(i)
    if(i==5){
        break
    }
} */

/* for( let i = 1; i <= 10; i++ ){

    if( i == 5 ){
        continue
    }
    console.log(i)
}


for( let i = 1; i <= 10; i++ ){
    
    if( i == 5 ){
        continue
    }
    console.log(i)
} */