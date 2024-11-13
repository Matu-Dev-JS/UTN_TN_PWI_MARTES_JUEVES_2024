import React, { useState } from 'react'
import extractFormData from '../helpers/extractFormData'
import { getFormattedDateMMHHDDMM } from '../helpers/getFormattedTime'



const FomulariosScreen = () => {



    //Creamos un estado de usuarios, empieza como array vacio
    const [usuarios, setUsuarios] = useState([])


    //Estado de errores, que hace? 
    const [errors, setErrors] = useState({nombre: null, contrasenia: null})

    //Pregunta tecnica: Si yo hago un push (osea agrego un elemento al array) que pasara? Se imprime en pantalla

    //Queres controlar los inputs o preferis esperar a que el usuario envie el formulario

    //No controlar gasta menos recursos

    const handleSubmitUncontrolledForm = (evento) => {
        evento.preventDefault()
        //El evento es objeto con datos del evento en particular

        //El target de un evento es el elemento HTML que emitio dicho evento
        const form_jsx = evento.target

        const nuevo_usuario = extractFormData(form_jsx) //{nombre, contrasenia}

        const errores_formulario = {nombre: null, contrasenia: null}
        let hayErrores = false

        if(!nuevo_usuario.nombre){
            errores_formulario.nombre = 'Falta un nombre'
            hayErrores = true
        }
        if(!nuevo_usuario.contrasenia){
            errores_formulario.contrasenia = 'Falta una contrasenia'
            hayErrores = true
        }
        //Setteamos que los errores se guarden en el estado de errores
        setErrors(errores_formulario)


        if(!hayErrores){
            
            nuevo_usuario.hora_creacion = getFormattedDateMMHHDDMM()

            //Agregar a mi estado el nuevo usuario
            //Esto esta MAL 🤮: usuarios.push(nuevo_usuario)
    
            //Esto es mejor ⭐🤓
            setUsuarios(
                (prevUsuariosState) => {
                    return [...prevUsuariosState, nuevo_usuario]
                }
            )
        
            console.log('formulario enviado')
        }
    }

    console.log(usuarios)
    return (
        <div>
            <h1>Formularios en React</h1>
            <form onSubmit={handleSubmitUncontrolledForm}>

                <label htmlFor="nombre">Ingrese su nombre</label>
                <br/>
                <input type="nombre" id='nombre' name='nombre' />
                {errors.nombre && <span style={{color: 'red'}}>{errors.nombre}</span>}

                <br/>
                <br/>

                <label htmlFor="contrasenia">Ingrese su contraseña</label>
                <br/>
                <input type="password" id='password' name='contrasenia' />
                {errors.contrasenia && <span style={{color: 'red'}}>{errors.contrasenia}</span>}

                <br/>

                <button type='submit'>Confirmar</button>
            </form>
            <UsersList users={usuarios}/>
        </div>
    )
}

const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return <UserCard nombre={user.nombre} contrasenia={user.contrasenia}/>
            })}
        </div>
    )
}

const UserCard = ({nombre, contrasenia}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h2>Contrasenia: {contrasenia}</h2>
        </div>
    )
}


export default FomulariosScreen