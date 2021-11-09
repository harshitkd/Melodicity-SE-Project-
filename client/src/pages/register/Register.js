import React from 'react'
import '../login/Login.css'
import Logo from '../../components/logo/Logo'

const Register = () => {
  return (
    <div className="login">
      <div className="login-div d-flex align-items-center flex-column">
      <div className="login-bg-spot-1"></div>
      <Logo />
      <span>
        Welcome to the world of Music
      </span>
      <div className="login-form">
      <form className="form">
          <div className="input-div">
              <input 
                  type="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="  " 
                  required 
                  // onChange={(e)=>{
                  //     setUsername(e.target.value);
                  // }}
                  />
              <label htmlFor="name" className="form-label">Name</label>
              <div className="input-icon"><i className="far fa-user"></i></div>
          </div>
          <div className="input-div">
              <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="  " 
                  required 
                  // onChange={(e)=>{
                  //     setUsername(e.target.value);
                  // }}
                  />
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-icon"><i className="far fa-envelope"></i></div>
          </div>
          <div className="input-div">
              <input 
              type="password" 
              name="password" 
              // ref={passwordRef} 
              className="form-input" 
              placeholder="  " 
              required 
              // onChange={(e)=>{
              //         setPassword(e.target.value);
              //     }}
              />
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-icon"><i className="fas fa-lock"></i></div>
          </div>
          <div className="input-div">
              <input 
              type="confirmpassword" 
              name="confirmpassword" 
              // ref={passwordRef} 
              className="form-input" 
              placeholder="  " 
              required 
              // onChange={(e)=>{
              //         setPassword(e.target.value);
              //     }}
              />
              <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
              <div className="input-icon"><i className="fas fa-key"></i></div>
          </div>         
        </form>
        <div className="login-submit-btn d-flex align-items-center submit">Register</div>
      </div>
      </div>
    </div>
  )
}

export default Register
