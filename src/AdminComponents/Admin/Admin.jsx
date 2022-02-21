import { useEffect, useState } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'
// Prime
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'

import { Splitter, SplitterPanel } from 'primereact/splitter'
import { PanelMenu } from 'primereact/panelmenu'

import Logo from '../../assets/logo.svg'

const Admin = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/')
    localStorage.removeItem('login-data')
    window.removeEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }

  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Usuarios',
          icon: 'pi pi-fw pi-user',
          command: () => {
            navigate('/admin/user-admin')
          },
        },
        {
          label: 'Productos',
          icon: 'pi pi-fw pi-shopping-bag',
          command: () => {
            navigate('/admin/product-admin')
          },
        },
        {
          label: 'Cerrar Sesión',
          icon: 'pi pi-fw pi-external-link',
          command: () => {
            onLogout()
          },
        },
      ],
    },
  ]

  // const [visibleMenu, setVisibleMenu] = useState(false)

  useEffect(() => {
    history.pushState(null, document.title, location.href)

    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }, [])

  return (
    <div>
      <div className="card">
        <Splitter style={{ height: '100vh' }} className="mb-5">
          <SplitterPanel
            size={15}
            minSize={10}
            className="flex align-items-center justify-content-center"
          >
            {/* <div className="admin-menu">
              <Sidebar
                visible={visibleMenu}
                onHide={() => setVisibleMenu(false)}
              >
                <h3>Left Sidebar</h3>
              </Sidebar>
              <Button
                icon="pi pi-arrow-right"
                onClick={() => setVisibleMenu(true)}
                className="mr-2"
              />
            </div> */}

            <div className="panel-header">
              <img src={Logo} alt="logo" />
              <h2> Genios SoftGAC</h2>
            </div>

            <div className="card">
              <PanelMenu model={items} style={{ width: '22rem' }} />
            </div>
          </SplitterPanel>
          <SplitterPanel
            size={75}
            minSize={60}
            className="flex align-items-center justify-content-center"
          >
            <Outlet />
          </SplitterPanel>
        </Splitter>
      </div>
    </div>
  )
}

export { Admin }
