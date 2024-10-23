import React from "react"

function App() {
    let num1 = 1
    let num2 = 2

    //Renderizado condicional
    let estaComprado = false
    let estaLogueado = false

    let espacioConsumido = 9
    let espacioTotal = 10
    let porcentajeDeEspacioLimite = espacioTotal * 0.2
    let espacioCercaDelLimite = espacioConsumido > espacioTotal - porcentajeDeEspacioLimite
    return (
        <div className="caja caja-especial">
            <h1>Hello World</h1>
            <Caja />
            <Caja />
            <Caja />
            {
                <div>
                    <div></div>
                    <div></div>
                </div>

            }

            {
                true && (
                    <div>
                        <div></div>
                        <div></div>
                    </div>

                )
            }

            

            <h2>Resultado {num1} + {num2} = {num1 + num2} </h2>
            {
                estaComprado
                    ? <button>Comprado</button>
                    : <button>Comprar</button>
            }

            <button disabled={estaComprado}>Comprar</button>

            {!estaLogueado && <a href="#">Login</a>}

            <br />

            {
                espacioCercaDelLimite
                &&
                <div>
                    {
                        espacioConsumido === espacioTotal
                            ? <span>Has consumido todo tu espacio!</span>
                            : (
                                espacioConsumido > espacioTotal
                                    ? <span>No puedes hacer mas operaciones, has consumido mas que todo tu espacio!</span>
                                    : <span>Estas cerca de consumir el limite de espacio </span>
                            )
                    }
                    <a href="#">Mejorar plan</a>
                </div>

            }
        </div>
    )
}

function Caja() {
    return (
        <div>
            <div>hola</div>
            <div>Chau</div>
        </div>

    )
}

export default App


/* 
Los componentes son:
Funciones que devuelven JSX (html)

*/
