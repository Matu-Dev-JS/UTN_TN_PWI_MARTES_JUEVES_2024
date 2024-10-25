import React from 'react'
import './global.css'


function App() {

	

	function saludarPersona({ nombre, edad }) {

		console.log(`FUNCION Hola me llamo ${nombre} y tengo ${edad} años`)
	}
	let persona_x = { nombre: 'juan', edad: 48, apellido: 'suarez' }

	saludarPersona({ nombre: 'juan', edad: 48 })


	const workspaces = [
		{
			nombre: 'UTN PW',
			logo: 'direccion',
			miembros: [
				{
					nombre: 'pepe',
					avatar: 'direccion'
				},
				{
					nombre: 'pepe',
					avatar: 'direccion'
				},
				{
					nombre: 'pepe',
					avatar: 'direccion'
				}
				,
				{
					nombre: 'pepe',
					avatar: 'direccion'
				}
			]
		},
		{
			nombre: 'Joda de javascript',
			logo: 'direccion',
			miembros: [
				{
					nombre: 'pepe',
					avatar: 'direccion'
				},
				{
					nombre: 'pepe',
					avatar: 'direccion'
				}
			]
		},
		,
		{
			nombre: 'Joda de javascript',
			logo: 'direccion',
			miembros: [
				{
					nombre: 'pepe',
					avatar: 'direccion'
				},
				{
					nombre: 'pepe',
					avatar: 'direccion'
				}
			]
		}
		,
		{
			nombre: 'Joda de javascript',
			logo: 'direccion',
			miembros: [
				{
					nombre: 'pepe',
					avatar: 'direccion'
				},
				{
					nombre: 'pepe',
					avatar: 'direccion'
				}
			]
		}
		,
		{
			nombre: 'Joda de javascript',
			logo: 'direccion',
			miembros: [
				{
					nombre: 'pepe',
					avatar: 'direccion'
				},
				{
					nombre: 'pepe',
					avatar: 'direccion'
				}
			]
		}
	]

	const workspacesJSXList = workspaces.map(
		(workspace) =>{
			return (
				<div>
					<img src={workspace.logo} />
					<h2>{workspace.nombre}</h2>
					<span>{workspace.miembros.length} miembros</span>
				</div>
			)
		}
	)

	//NUEVO DESAFIO: Buscar la forma de transformar mi array en un array de JSX

	//.map Para que sirve? para transformar arrays en otros array
	//Devuelve un array con la misma cantidad de elementos que el array original
	//lo que devuelva mi callback se guardara como elemento del array resultante

	//Transformar este array en [{dia: 'lunes', letras: 5}, {dia: 'martes', letras: 6}, {dia: 'miercoles', letras: 9}]
	const dias = ['lunes', 'martes', 'miercoles'] 
	const diasDetalle = dias.map(
		(dia) => {
			return {dia: dia, letras: dia.length}
		}
	)
	console.log(diasDetalle)

	//JSXList
	const lista = [
		<div>hola</div>,
		<div>hola</div>,
		<div>hola</div>
	]
	return (
		<div>
			{workspacesJSXList}

			<Navbar
				title={'Hola mundo'}
				backgroundColor='red'
				objeto={
					{ valor_1: 1 }
				}
			/>
			<h1>Hola</h1>
			<CashCard
				saldo={100}
				logo_tarjeta={'visa'}
				numero_tarjeta={'123456789'}
				nombre={'juan'}
			/>
			<CashCard
				saldo={90}
				logo_tarjeta={'Mastercard'}
				numero_tarjeta={'123213 213 13213 213'}
				nombre={'Matias'}
			/>

		</div>
	)
}

/* 
CSS as object
StyledComponents
*/

const Navbar = (props) => {
	console.log(props)
	return (
		<header style={
			{
				backgroundColor: props.backgroundColor
			}
		}
			className='navbar'
		>
			<h2>{props.title}</h2>
			<nav>
				<a href=""> Home</a>
				<a href=""> About</a>
				<a href=""> Contact</a>
			</nav>
		</header>
	)
}

const CashCard = ({ saldo, logo_tarjeta, numero_tarjeta, nombre }) => {
	return (
		<div className="card">
			<div className="header_inf">
				<span className="saldo">${saldo}</span>
				<span className="logo_targeta">{logo_tarjeta}</span>
			</div>
			<div className="bottom_inf">
				<div className="text">
					<span className="numero_tarjeta">{numero_tarjeta}</span>
					<span className="nombre">{nombre}</span>
				</div>
				<button>x</button>
			</div>
		</div>
	)
}

/* Las props son un objeto que recibe el componente, TODOS los componentes reciben a props */

export default App
