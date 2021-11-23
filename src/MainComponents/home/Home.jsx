import { Navbar } from '../../MicroComponents/Navbar'
import { Hero } from '../../MicroComponents/Hero'
import heroImage from '../../assets/heroImage.png'
import logo from '../../assets/logo.svg'

const Home = () => {
  const HomeItems = [
    { label: 'ver catálogo', route: '/catalog', icon: 'pi pi-shopping-bag' },
    { label: 'Iniciar Sesión', route: '/', icon: 'pi pi-user' },
  ]

  return (
    <div>
      <Navbar
        logo={logo}
        brandTitle="Genios aprende jugando"
        logoSize="50px"
        links={HomeItems}
      />

      <Hero
        title="GENIOS APRENDE JUGANDO"
        text=" Pagina inicial de la empresa, está página es provisional
        y mejorará su diseño en el futuro. En la siguiente lista encuentras vínculos rápidos
        a los prototipos de interfaz."
        image={heroImage}
      />
    </div>
  )
}

export { Home }
