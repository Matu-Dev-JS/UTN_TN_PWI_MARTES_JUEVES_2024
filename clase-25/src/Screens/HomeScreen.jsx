import React from "react";
import { WorkspaceList } from "../Components";


const HomeScreen = () => {
    const workspaces = [
		{
			img: '',
			title: 'UTN PWA TN',
			miembros: [],
			id: 1
		},
		{
			img: '',
			title: 'UTN PWA TM',
			miembros: [],
			id: 2
		},
		{
			img: '',
			title: 'UTN Fiesta',
			miembros: [],
			id: 3
		}
	]
    return (
        <div>
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}


export default  HomeScreen