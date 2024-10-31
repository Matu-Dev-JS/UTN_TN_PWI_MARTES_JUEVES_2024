import React from "react"
import { useParams } from "react-router-dom"

const WorkspaceScreen = () => {
    const params = useParams()
    const workspace_id = params.pepe //les devolvera un objeto con los parametros de busqueda de esa url {workspace_id: "1"}
    return (
        <div>
            <h1>Workspace con id {workspace_id}</h1>
            <DummyComponent/>
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