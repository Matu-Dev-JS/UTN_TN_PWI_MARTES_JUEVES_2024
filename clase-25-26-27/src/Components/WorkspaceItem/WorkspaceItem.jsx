import React from 'react'
import './WorkspaceItem.css'

const WorkspaceItem = ({img, title, miembros, id}) => {

    return (
        <div className="workspace-item">
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {miembros.length} miembros</span>
            <a href={`/workspace/` + id}>Ir al espacio</a>
        </div>
    )
}

export default WorkspaceItem