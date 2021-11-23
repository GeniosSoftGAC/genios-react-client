import styled from 'styled-components'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  width: 100%;
  height: fit-content;
  background: white;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-grow: 1;
  }

  ul {
    padding-inline-start: 0;
    display: none;
    flex-grow: 2;
    align-self: center;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    a {
      text-decoration: none;
    }
  }

  .custom-children {
    display: flex;
    * {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 700px) {
    .custom-children {
      display: none;
    }

    ul {
      display: flex;
    }
  }
`

const StyledImage = styled.img`
  width: ${(props) => props.size || '100%'};
  height: fit-content;
`

const CustomSidebar = styled(Sidebar)`
  .p-sidebar-content {
    display: grid;
    place-items: start center;

    ul {
      display: grid;
      place-items: center;
      list-style: none;
      grid-gap: 2rem;
      padding-inline-start: 0;
      h2 {
        display: flex;
        gap: 1rem;
        place-items: center;
      }
      a {
        width: 100%;
        text-decoration: none;
        li {
          display: flex;
          justify-content: center;
          gap: 1rem;
          background-color: var(--primary-color);
          padding: 1rem;
          color: white;
          width: 100%;
          transition: all 0.2s ease-in-out;
          border-radius: 5px;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`

const Navbar = ({
  logo,
  brandTitle,
  logoSize,
  links,
  customMenu,
  additionalItem,
}) => {
  const renderLinks = (items) => {
    return items.map((item, key) => (
      <NavLink key={key} to={item.route}>
        <li>
          <i className={item.icon || ''} />
          {item.label}
        </li>
      </NavLink>
    ))
  }

  const [visibleFullScreen, setVisibleFullScreen] = useState(false)
  const fullScreenMenu = () => {
    return (
      <div>
        <Button
          icon="pi pi-bars"
          onClick={() => setVisibleFullScreen(true)}
          className="p-mr-2"
        />
        <CustomSidebar
          visible={visibleFullScreen}
          fullScreen
          onHide={() => setVisibleFullScreen(false)}
        >
          <ul>
            <h2>
              <StyledImage src={logo} size={logoSize} />
              Genios
            </h2>
            {renderLinks(links) || ''}
          </ul>
        </CustomSidebar>
      </div>
    )
  }

  return (
    <StyledNav>
      <div className="brand">
        <a href="/">
          <StyledImage src={logo} size={logoSize} />
        </a>
        <h3>{brandTitle ? brandTitle : ''}</h3>
      </div>
      <ul>{links ? renderLinks(links) : ''}</ul>
      <div className="custom-children">{customMenu || fullScreenMenu()}</div>
      {additionalItem ? additionalItem : ''}
    </StyledNav>
  )
}

export { Navbar }
