import React from 'react'
import { NavBar, Brand, Auth } from '../Styles/StylesNavbar'

const Navbar = () => {
  return (
    <NavBar>
        <Brand>
            Encuestas RateInc
        </Brand>
        <Auth>
            Login
        </Auth>
    </NavBar>
  )
}

export default Navbar