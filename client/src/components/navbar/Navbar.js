import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

import './Navbar.css'

const Navbar = () => {
  const token = useSelector(state => state?.auth?.token)
  const userId = useSelector(state => state?.auth?.userId)
  const isCreator = useSelector(state => state?.auth?.isCreator)
  const [showNavBackground, setShowNavBackground] = useState(false);

  const navTransition = () => {
    if (window.scrollY > 100) {
      setShowNavBackground(true);
    } else {
      setShowNavBackground(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navTransition);
    return () => window.removeEventListener('scroll', navTransition);
  }, [])

  return (
    <div className="navbar" >
      <div className="nav-background" style={{opacity: showNavBackground ? 1 : 0}}/>
      <nav className="d-flex justify-content-between align-items-center nav-content">
        <div className="brand">
          Melodicity
        </div>
        <div className="d-flex justify-content-between align-items-center navbar-options">
          <Link to={"/songs"}>{token && <span className="navbar-search"> <i className="fas fa-search"></i>&nbsp; Search</span>}</Link>
          {(!token || isCreator) && <span>Publish</span>}
          <span><Link to={"/songs"}>Listen</Link></span>
          <div className='nav-line' />
          <>
            {token ?
              <span className="nav-item-logout nav-item "><Link to={'/profile/' + userId}> <i className="fas fa-user-alt"></i> </Link></span> :
              <span className="nav-item-login nav-item login-text"><Link to={'/login'}>Log in</Link></span>
            }
          </>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
