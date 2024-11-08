
//RAFCE = React arrow function component export default
//Un componente de React exportado por defecto

import React, { useState } from 'react'

const EstadosScreen = () => {
    
    //Es una funcion que nos permite generar estados de react
    //Devuelve un array con el valor de tu estado y una funcion de seteo
    //useState => [stateValue, setState]
    //useState espera recibir el valor inicial de tu estado

    //REGLAS
    //NO se puede reasignar el valor de un estado
    //Si queremos cambiar el valor de un estado debemos usar SIEMPRE LA FUNCION DE SETEO

    //Funcion de seteo/setting
    //La funcion de setting recibe 
    //1. un valor, que sera el nuevo valor del estado

    //La funcion de setting hara que mi componente vuelva a cargarse
    
    //Esto es un array 
    const [contador, setContador] = useState(1)



    //La funcion setter puede recibir una callback
    //El valor de retorno de la callback es el valor que tendra mi estado
    //La callback recibira un parametro con el valor del estado previo

    const incrementar = () => {
        //contador 1
        //Llamo a la funcion de setting
        setContador(
            (prevContadorState) => {
                return prevContadorState + 1
            }
        )
    }
    const [errorMinValue, setErrorMinValue] = useState(false)
    const decrementar = () =>{
        if (contador > 1){
            setContador (
                (prevState) =>{
                    return prevState - 1
                }
            )
        }else{       
            //Usamos la callback o no?
            setErrorMinValue(true)
        }
    }
    /* 
    PROBLEMA:
    Quiero que cuando CAMBIE el contador VUELVA a imprimir el componente

    SOLUCION:
    Usa estados de react
    */

    const handleShowHiddenText = () =>{
        //Es necesario pasar una callback? Si conviene
        setIsHiddenText(
            (prevTextIsHiddenState) => {
                return !prevTextIsHiddenState
            }
        )
    }
    //state isHiddenText : boolean (default true)
    const [isHiddenText, setIsHiddenText] = useState(false)

    return (
        <div>
            {console.log('Me imprimi')}
            <h1>Estados en React</h1>
            <div>
                <button onClick={decrementar}>Restar</button>
                <span>{contador}</span>
                <button onClick={incrementar}>Sumar</button>

                {errorMinValue &&<span>Error, el contador no puede ser menor a 1</span>}
            </div>

            <button onClick={handleShowHiddenText}>Abrir</button>
            
            
            {
                !isHiddenText && <span>Texto oculto</span>
            }

            {/* <span hidden={isHiddenText}>Texto oculto</span> */}
        </div>
    )
}
//condicion ? caso verdadero : caso falso

export default EstadosScreen