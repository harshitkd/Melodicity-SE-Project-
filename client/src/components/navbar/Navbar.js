import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './Navbar.css'
import { userLogout } from '../../redux/auth/authActions'

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state?.auth?.token)
  return (
    <div className="navbar">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="brand">
          Melodicity
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <>
            { token ? 
              <span className="nav-item-login nav-item " onClick={()=>dispatch(userLogout())}>LOGOUT</span> :
              <span className="nav-item-login nav-item "><Link to={'/login'}>LOGIN</Link></span>
            }
          </>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
