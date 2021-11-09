import React from 'react'
import './Login.css'
import Logo from '../../components/logo/Logo'

const Login = () => {
  return (
    <div className="login">
      <div className="login-div d-flex align-items-center flex-column">
      <div className="login-bg-spot-1"></div>
      <Logo />
      <span>
        Login now to stream your
        favorite music
      </span>
      <div className="login-form">
      <form className="form">
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
          <div className="input-div" style={{marginBottom : "0.5rem"}}>
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
        </form>
        <div className="forgot-pass">Forgot password</div>
        <div className="login-submit-btn d-flex align-items-center submit">Login</div>
        <div className="login-divider">
          <div>or</div>
        </div>
        <div className="login-submit-btn d-flex align-items-center opt">Register</div>
      </div>
      </div>
    </div>
  )
}

export default Login
