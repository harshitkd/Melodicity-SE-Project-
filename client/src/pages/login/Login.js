import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './Login.css'
import Logo from '../../components/logo/Logo'
import { userLogin } from '../../redux/auth/authActions'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggler, setPasswordToggler] = useState(false);
  var passwordRef = React.createRef();
  const isLoading = useSelector(state => state?.auth?.isLoading)

  const toggleIcon = passwordToggler ? (
      <div className="password-toggler">
          <i className="fas fa-eye-slash" onClick={()=> {managePasswordVisibility()}}></i>
      </div>
  ) : (
      <div className="password-toggler">
          <i className="fas fa-eye" onClick={()=> {managePasswordVisibility()}}></i>
      </div>
  );
  const submitButton = isLoading ? (
      <button className="login-submit-btn d-flex align-items-center submit" disabled><i className="fas fa-spinner" ></i></button>
  ) : (
    <button className="login-submit-btn d-flex align-items-center submit">Login</button>
  )
  const managePasswordVisibility = () => {
      const node = passwordRef.current;
      if(passwordToggler){
          node.type="password";
          setPasswordToggler(false);
      }
      else{
          node.type = "text";
          setPasswordToggler(true);
      }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const m = {
          email : email,
          password : password
      }
      dispatch(userLogin(m))
  }

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
      <form className="form" onSubmit={handleSubmit}>
          <div className="input-div">
              <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="  " 
                  required 
                  onChange={(e)=>{
                      setEmail(e.target.value);
                  }}
                  />
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-icon"><i className="far fa-envelope"></i></div>
          </div>
          <div className="input-div" style={{marginBottom : "0.5rem"}}>
              <input 
              type="password" 
              name="password" 
              ref={passwordRef} 
              className="form-input" 
              placeholder="  " 
              required 
              onChange={(e)=>{
                      setPassword(e.target.value);
                  }}
              />
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-icon"><i className="fas fa-lock"></i></div>
              {toggleIcon}
          </div>          
          <div className="forgot-pass">Forgot password</div>
          {submitButton}
        </form>
        <div className="login-divider">
          <div>or</div>
        </div>
        <div className="login-submit-btn d-flex align-items-center opt" onClick={() => history.push(`/register`)}>Register</div>
      </div>
      </div>
    </div>
  )
}

export default Login
