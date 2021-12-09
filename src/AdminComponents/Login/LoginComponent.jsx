import { Navbar } from '../../MicroComponents/Navbar'
import { FormContainer } from './FormContainer'
import { LoginForm } from './LoginForm'
import logo from '../../assets/logo.svg'

const LoginComponent = () => {
  const LoginLinks = [
    { label: 'home', route: '/', icon: 'pi pi-shopping-bag' },
    { label: 'catalogo', route: '/catalog', icon: 'pi pi-user' },
  ]
  return (
    <FormContainer>
      <Navbar
        logo={logo}
        brandTitle="Genios aprende jugando"
        logoSize="50px"
        links={LoginLinks}
      />
      <LoginForm />
    </FormContainer>
  )
}

export { LoginComponent }
