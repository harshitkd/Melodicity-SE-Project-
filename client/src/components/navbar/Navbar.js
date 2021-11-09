import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="brand">
          Melodicity
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <>
            <span className="nav-item-login nav-item "><Link to={'/login'}>LOGIN</Link></span>
          </>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
