import { Navbar } from '../../MicroComponents/Navbar'
import logo from '../../assets/logo.svg'

const Home = () => {
  const myItems = [
    { label: 'home', route: '/' },
    { label: 'catalog', route: '/catalog' },
    { label: 'checkout', route: '/checkout' },
  ]

  return (
    <div>
      <Navbar
        logo={logo}
        brandTitle="Genios aprende jugando"
        logoSize="50px"
        links={myItems}
        customChildren={<i className="pi pi-bars"></i>}
      />
      <h1>Este es el home</h1>
      <a href="/catalog">Ir a catálogo</a>
    </div>
  )
}

export { Home }
