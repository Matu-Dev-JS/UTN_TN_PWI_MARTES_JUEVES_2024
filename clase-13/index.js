
/* 
CONSTRUCTORES
String()
Number()
Boolean()
*/


//OPERADORES ARITMETICOS
/* 
REGLA:
+ CONCATENAR
SOLO OCURRE CUANDO HAY UN STRING EN LA OPERACION
QUE HACE?
    Transforma el dato distinto de string a STRING y devuelve la union de los 2 STRINGS 
    DEVUELVE STRING


'pepe' + null
//Proceso interno
'pepe' + String(null)
'pepe' + 'null'
'pepenull'
//FIN Proceso interno



REGLAS:
//LOS 5 OPERADORES DE ABAJO DEVUELVEN NUMEROS
//TRANSFORMA EL DATO QUE NO ES NUMERO EN NUMERO
//SI ALGUN DATO ES NAN LA OPERACION DEVOLVERA NAN

+ SUMAR
    OCURRE CUANDO NO HAY STRING 

//LOS STRINGS QUE SOLO TIENEN NUMEROS PUEDEN TRANSFORMARSE A NUMEROS
- RESTAR
/ DIVIDIR
% MODULO / RESTO
* MULTIPLICAR

*/

/* 
9 - '1'
//PROCESO INTERNO
9 - Number('1')

9 - 1

8 
*/


1 + 7 * 10

/* 5 + 'pepe'

5 + Number('pepe') */

/* 1 + 1

20 - 1

60 * 3

true * 7

null / 0

'pepe' + 'hola' */


NaN + '' + Number('null')
//proceso interno
String(NaN) + '' + NaN
'NaN' + NaN
'NaN' + String(NaN)
'NaN' + 'NaN'
'NaNNaN'


10 / 2 //5
11 / 2 //5 y uno queda vacio

/* 11 % 2

'pepe' % 2 */


/* 140 / 23


10 - ''

9 * undefined

 */


7 * NaN + Number('Null')  //Number NaN

Number(undefined + 0 + '' + "JUAN") //Number NaN

Number(Boolean(true)) + 0 //Number 1



//COMPARADORES
//SIEMPRE DEVUELVEN BOOLEAN
//NAN ES UN VALOR QUE NO SE PUEDE COMPARAR CON NINGUN DATO, NISIQUIERA CONSIGO MISMO, SIEMPRE SERA DISTINTO
//NULL NO PUEDE SER IGUAL A NADIE EXCEPTO UNDEFINED U OTRO NULL
/* 
==  IGUAL A 
=== ESTRICTAMENTE IGUAL A
!=  DISTINTO DE
!== ESTRICTAMENTE DISTINTO DE
>   MAYOR A
<   MENOR A
>=  MAYOR O IGUAL A 
<=  MENOR O IGUAL A
*/

/* (10 == 9 ) + 1
Number(false) + 1 // 1 */


/* 
mochascript
livescript
javascript 
*/


//Truthy Y Falsy
//TODOS LOS DATOS SE PUEDEN TRANSFORMAR A BOOLEAN
//LOS VALORES Truthy son los que al transformarse a booleano devuelven TRUE
//LOS VALORES Falsy son los que al transformarse en booleano devuelven FALSE

//LISTA DE VALORES Falsy es:
/* 

0
''
NaN
undefined
null
false
-0

*/

//LOS VALORES Truthy son TODOS los que no sean falsy


//OPERADORES LOGICOS
// !  NOT: DEVUELVE EL VALOR BOOLEANO OPUESTO AL DATO NEGADO

// && AND:
//SELECCIONA ENTRE 2 VALORES, 
//  SI EL PRIMER VALOR ES Truthy DEVUELVE EL SEGUNDO
//  SI EL PRIMER VALOR ES Falsy DEVUELVE EL PRIMERO

/* 7 && 'pepe'
10 && false
'' && 0 */

// || OR
//SELECCIONA ENTRE 2 VALORES, 
//  SI EL PRIMER VALOR ES Truthy DEVUELVE EL PRIMERO
//  SI EL PRIMER VALOR ES Falsy DEVUELVE EL SEGUNDO

/* 
PRECEDENCIA:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#operator_precedence
PRIORIDAD:
NOT
AND
OR
*/

/* 
TABLAS DE LA VERDAD:

AND:
    TRUE && TRUE = TRUE
    TRUE && FALSE = FALSE
    FALSE && TRUE = FALSE
    FALSE && FALSE = FALSE

OR: 
    TRUE || TRUE = TRUE
    TRUE || FALSE = TRUE
    FALSE || TRUE = TRUE
    FALSE || FALSE = FALSE
*/


/* DEJAR PASAR SI EL USUARIO TIENE MAS DE 400 NIVELES Y MENOS DE 900 */

/* NIVEL = 1000

CONDICION = NIVEL > 400 && NIVEL < 900 */
        //   true    &&  NIVEL < 900
        //   NIVEL < 900
        //   false

//VARIABLES

//VAR
//LET
//CONST

/* 
Sintaxis:
tipo_de_variable indentificador = dato
*/

/* 
camelCase (el profe lo usa en ingles)
snake_case (el profe lo usa en español)
UpperCamelCase
*/

var nivel_y_poder = 1000
var nivel_y_poder = '500'

var condicion = nivel_y_poder > 400 && nivel_y_poder < 900


console.log(condicion)