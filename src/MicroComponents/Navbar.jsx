import styled from 'styled-components'

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
    display: flex;
    flex-grow: 2;
    align-self: center;
    align-items: center;
    gap: 2rem;
    list-style: none;

    a {
      text-decoration: none;
    }
  }

  .custom-children {
    * {
      font-size: 1.3rem;
    }
  }
`

const StyledImage = styled.img`
  width: ${(props) => props.size || '100%'};
  height: fit-content;
`

const Navbar = ({ logo, brandTitle, logoSize, links, customChildren }) => {
  const renderLinks = (items) => {
    return items.map((item, key) => (
      <li key={key}>
        <a href={item.route}>{item.label}</a>
      </li>
    ))
  }

  return (
    <StyledNav>
      <div className="brand">
        <StyledImage src={logo} size={logoSize} />
        <h3>{brandTitle ? brandTitle : ''}</h3>
      </div>
      <ul>{links ? renderLinks(links) : <li>No hay items</li>}</ul>
      <div className="custom-children">
        {customChildren ? customChildren : ''}
      </div>
    </StyledNav>
  )
}

export { Navbar }
