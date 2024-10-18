import React from 'react'
import pepe, {sumar as add, restar} from './math.js'


function sumar (){
  alert()
}
/* 
Si nuestro modulo trabaja con componentes ese modulo debe tener como extension .jsx
Los archivos JSX traen una nueva sintaxis, por ejemplo nos permiten escribr HTML como si fuera un nuevo tipo de dato

Si nuestro archivo tiene componentes entonces debemos importar a React

*/

/* 
Esta funcion es un Componente, decimos que es un componete porque devuelve HTML
*/
const mostrarMensaje = () => {
  alert('soy un mensaje')
}

function App() {
  console.log(pepe)
  console.log(add(1,2))
  let nombre = prompt('ingrese su nombre')
  
  return (
    <div>
      {
        nombre
        ? <h1>Hola {nombre}</h1>
        : <h1>Hola desconocido</h1>
      }

      <button onClick={mostrarMensaje}>Click</button>
      <div>Resultado: {add(1, 2)}</div>
    </div>
  )
}

export default App
