import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeroContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
  padding: 6rem 2rem;
  height: min-content;

  .hero-info {
    display: grid;
    grid-gap: 1rem;
  }

  .hero-info__title {
    color: var(--primary);
  }

  .hero-info__paragraph {
    font-size: 1.3rem;
  }

  .hero-image {
    justify-self: end;
    width: 70%;
  }

  .button {
    background: var(--accent);
    padding: 1rem;
    color: white;
    border: none;
    border-radius: 5.76px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`

const Hero = ({ title, text, image }) => {
  return (
    <HeroContainer>
      <div className="hero-info">
        <h1 className="hero-info__title">{title}</h1>
        <p className="hero-info__paragraph">{text}</p>
        <form>
          <NavLink to="./catalog" className="button">
            Ver catálogo
          </NavLink>
        </form>
      </div>
      <img src={image} alt="hero image" className="hero-image" />
    </HeroContainer>
  )
}

export { Hero }
