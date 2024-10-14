import React from 'react'
import Nav from './Nav'
import Logo from '../assets/Logo_1.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
        <header>
            <Link to="/"><img src={Logo} alt="Logo of Little Lemon"></img></Link>
            <Nav id="header-nav"></Nav>
        </header>
    </>
  )
}

export default Header