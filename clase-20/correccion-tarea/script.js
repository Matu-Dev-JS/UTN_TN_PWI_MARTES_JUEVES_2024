const users = [
    {
        nombre: 'Lucia Plagnet',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-512',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Agustin amposta ',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-42a3dea57862-512',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'cristian',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5JNC22V-g4ba7ad618a1-192',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Emanuel Carreira',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-192',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'Federico Dermisache',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ECCZKSKZ-66c9cf50e442-512',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Gaston Ferrari',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCX98H2-7b2952b1bb15-512',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Gaston Nocquet',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ELATQ5DL-5454e9cc66fc-192',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'Lio Silman',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQTRNJF-20622c72af58-192',
        status: 'activo',
        writing: 'true'
    },
    {
        nombre: 'Lucas Legor',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-192',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'Marco Ceppi',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07FSFB1P4Z-d4026d02ef44-192',
        status: 'activo',
        writing: 'true'

    }

]

const usersContainerHTML = document.getElementById('users_container')

let usersContainer = ''

for (const user of users) {

    //definir estado de conexion:

    let statusUser = user.status == 'activo'

    //statusUser?
    //users.status 
    //span class="status activo"
    // : span class ="status inactivo"

    //Defini estado "escribiendo"
    let statusWriting = user.writing == "true"

    usersContainer = usersContainer +
        `
           <div class="user">

            <img src='${user.avatar}'>

            <span class="status ${user.status}"></span>

            <span>${user.nombre}</span>

           <span>
         <i class="${statusWriting ? 'fa-solid fa-pen' : ''}"></i>
           </span>

        </div>
        `
}

usersContainerHTML.innerHTML = usersContainer;