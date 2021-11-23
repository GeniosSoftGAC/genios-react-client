import { Navbar } from '../../MicroComponents/Navbar'
import logo from '../../assets/logo.svg'

const Catalog = () => {
  const CatalogLinks = [
    { label: 'home', route: '/', icon: 'pi pi-shopping-bag' },
    { label: 'Iniciar Sesión', route: '/', icon: 'pi pi-user' },
  ]

  return (
    <div>
      <Navbar
        logo={logo}
        brandTitle="Genios aprende jugando"
        logoSize="50px"
        links={CatalogLinks}
      />
      <h1>Bienvenido a el Catálogo</h1>
      <a href="/checkout"> Ir a Checkout </a> <br />
      <a href="/">Regresar</a>
    </div>
  )
}

export { Catalog }
