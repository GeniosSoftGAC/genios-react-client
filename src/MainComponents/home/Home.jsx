import { Navbar } from '../../MicroComponents/Navbar'
import logo from '../../assets/logo.svg'

const Home = () => {
	const myItems = [
		{ label: 'inicio', route: '/', icon: 'pi pi-home' },
		{ label: 'catálogo', route: '/catalog', icon: 'pi pi-shopping-bag' },
		{ label: 'contacto', route: '/', icon: 'pi pi-user' }
	]

	return (
		<div>
			<Navbar logo={logo} brandTitle='Genios aprende jugando' logoSize='50px' links={myItems} />
			<h1>Este es el home</h1>
			<a href='/catalog'>Ir a catálogo</a>
		</div>
	)
}

export { Home }
