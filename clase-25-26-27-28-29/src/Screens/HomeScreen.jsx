import React from "react";
import { WorkspaceList } from "../Components";
import { Link } from "react-router-dom";
import workspaces from "../data/workspacesData";


const HomeScreen = () => {
    
    return (
        <div>
			{/* Hace lo mismo que el <a></a> */}
			<Link to={'/estados'}>Ir a estados</Link>
			<br/>
			<Link to={'/formularios'}>Ir a formularios</Link>
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}


export default  HomeScreen