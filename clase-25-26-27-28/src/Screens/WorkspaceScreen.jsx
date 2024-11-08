import React, { useState } from "react"
import { useParams } from "react-router-dom"
import workspaces from "../data/workspacesData"
import { AiFillBehanceCircle } from "react-icons/ai";

//Sintaxis
/* 
SI la callback devuelve verdadero FIND dejara de buscar y retornara el elemento que coincida con esa condicion
SINO encuentra a ningun elemento que coincida devolvera UNDEFINED
lista.find((element) => {
    return element.nombre == 'pepe'
}) 
*/

const WorkspaceScreen = () => {
    //Que hace useParams? 
    const {workspace_id} = useParams()
    
    //Como buscarian el workspace por id?🤓
    const workspace_found = workspaces.find(
        (workspace) => {
            return workspace.id == workspace_id
        }
    )
    console.log(workspace_found)

    const [messages, setMessages] = useState(workspace_found.messages)

    const enviarMensaje = () => {

    }
    //const workspace_id = params.workspace_id //les devolvera un objeto con los parametros de busqueda de esa url {workspace_id: "1"}
    return (
        <div>
            <h1>{workspace_found.title}</h1>
            <div>
                <MessagesList messages={workspace_found.messages}/>
            </div>
        </div>
    )
}

const MessagesList = ({messages}) => {
    return (
        messages.map(message => {
            return <Message 
                key={message.id} 
                texto={message.texto} 
                autor={message.autor} 
                id={message.id} 
                hora={message.hora}
            />
        })
    )
}


const Message = ({texto, autor, id, hora}) => {
    return (
        <div>
            <h3>{autor} <AiFillBehanceCircle className="icon-custom"/></h3>
            <p>{texto}</p>
            <span>Hora: {hora}</span>

            <hr/>
        </div>
    )
}

const DummyComponent = () => {
    const params = useParams()
    console.log({params})
    return (
        <div>Hola</div>
    )
}
export default WorkspaceScreen