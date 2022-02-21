import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAdmin = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/')
    localStorage.removeItem('login-data')
  }

  useEffect(() => {
    history.pushState(null, document.title, location.href)

    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }, [])

  return (
    <div>
      <h1>Bienvenido al Administrador de Productos</h1>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  )
}

export { ProductAdmin }
