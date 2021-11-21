import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './Navbar.css'
import { userLogout } from '../../redux/auth/authActions'

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state?.auth?.token)
  const userId = useSelector(state => state?.auth?.userId)
  const isCreator = useSelector(state => state?.auth?.isCreator)
  return (
    <div className="navbar">
      <nav className="d-flex justify-content-between align-items-center">
        <div className="brand">
          Melodicity
        </div>
        <div className="d-flex justify-content-between align-items-center navbar-options">
          { token && <span className="navbar-search"> <i className="fas fa-search"></i>&nbsp; Search</span>}
          {(!token || isCreator) && <span>Publish</span>}
          <span>Listen</span>
          <span>Originals</span>
          <span>|</span>
          <>
            { token ? 
              <span className="nav-item-logout nav-item "><Link to={'/profile/'+userId}> <i className="fas fa-user-alt"></i> </Link></span> :
              <span className="nav-item-login nav-item "><Link to={'/login'}>LOGIN</Link></span>
            }
          </>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
