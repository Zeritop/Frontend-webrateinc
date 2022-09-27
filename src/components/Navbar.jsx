import React, {useState} from 'react'
import { NavBar, Brand, Auth } from '../Styles/StylesNavbar'
import Login from './Login';

const Navbar = ({log, setLog}) => {

    const loggear = () => {
        setLog(!log)
    }

  return (
    <NavBar>
        <Brand>
            Encuestas RateInc
        </Brand>
        <Auth>
            <button
                onClick={loggear}
            >Login
            </button>
        </Auth>
    </NavBar>
  )
}

export default Navbar