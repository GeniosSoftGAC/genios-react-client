import { useEffect, useState } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'
import { confirmPopup } from 'primereact/confirmpopup'

// Prime
import { Menubar } from 'primereact/menubar'

import { AdminWrapper } from './styled/AdminWrapper'

import Logo from '../../assets/logo.svg'

const Admin = () => {
  const hasUser = localStorage.getItem('login-data')
  const navigate = useNavigate()

  const confirmLogout = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: '¿ Está seguro de cerrar la sesión ?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => onLogout(),
    })
  }

  const onLogout = () => {
    navigate('/')
    localStorage.removeItem('login-data')
    window.removeEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }

  const items = [
    {
      label: 'Usuarios',
      icon: 'pi pi-fw pi-user',
      command: () => {
        navigate('/admin/user-admin')
        setVisibleMenu(false)
      },
    },
    {
      label: 'Productos',
      icon: 'pi pi-fw pi-shopping-bag',
      command: () => {
        navigate('/admin/product-admin')
        setVisibleMenu(false)
      },
    },
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-fw pi-external-link',
      command: (event) => {
        confirmLogout(event.originalEvent)
      },
    },
  ]

  const menubarStart = () => (
    <>
      <img src={Logo} alt="Brand" />
      <h4>Genios SoftGAC</h4>
    </>
  )

  useEffect(() => {
    if (!hasUser) {
      navigate('/')
      return
    }

    history.pushState(null, document.title, location.href)

    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }, [])

  return (
    <AdminWrapper>
      <Menubar model={items} start={menubarStart} />
      <div className="admin-container">
        <Outlet />
      </div>
    </AdminWrapper>
  )
}

export { Admin }
