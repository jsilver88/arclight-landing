import React from 'react'
import styled from 'styled-components'
import Logo from '../Assets/Logo.svg'
import Hamburger from '../Assets/Hamburger Menu.svg'
import { Link } from 'react-router-dom'
import styles from '../App.module.css'

const Navbar = () => {
  return (
    <Navigation>
      <Link to='/'>
        <img src={Logo} alt='Arclight' />
      </Link>
      <NavList>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/features'>Features</Link>
        </li>
        <li>
          <Link to='/docs'>Docs</Link>
        </li>
      </NavList>
      <Button className={styles.btn}>
        <span>Get started</span> — it’s free
      </Button>

      <MobileMenu src={Hamburger}></MobileMenu>
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  max-width: min(90%, 1140px);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`

const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
  a {
    color: #595959;
    font-size: 1.8rem;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: #000;
    }
  }

  @media screen and (max-width: 968px) {
    display: none;
  }
`

const Button = styled.button`
  @media screen and (max-width: 968px) {
    display: none;
  }
`

const MobileMenu = styled.img`
  cursor: pointer;
  @media screen and (min-width: 968px) {
    display: none;
  }
`
