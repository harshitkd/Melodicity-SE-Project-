import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import '../login/Login.css'
import Logo from '../../components/logo/Logo'
import { userPreregister } from '../../redux/auth/authActions'
import { addAlert } from '../../redux/alert/alertActions'

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirm, setconfirm] = useState("");
  const [passwordToggler, setPasswordToggler] = useState(false);
  var passwordRef = React.createRef();
  const isLoading = useSelector(state => state?.auth?.isLoading)
  const preRegistration = useSelector(state => state?.auth?.preRegistration)

  useEffect(()=>{
    if(!isLoading && preRegistration)
      history.push('/register/role')
  },[isLoading, preRegistration, history])

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
    <button className="login-submit-btn d-flex align-items-center submit">Next</button>
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
      if(password === confirm){
          dispatch(userPreregister({
              name : name.split(" ").filter(str => str.length).join(" "),
              email : email,
              password : password
          }));
      }

      else if(password !== confirm){
          dispatch(addAlert("Password does not match."));
      }    
  }

  return (
    <div className="login">
      <div className="login-div d-flex align-items-center flex-column">
      <div className="login-bg-spot-1"></div>
      <Logo />
      <span>
        Welcome to the world of Music
      </span>
      <div className="login-form">
      <form className="form" onSubmit={handleSubmit}>
          <div className="input-div">
              <input 
                  type="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="  " 
                  required 
                  onChange={(e)=>{
                      setName(e.target.value);
                  }}
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
                  onChange={(e)=>{
                      setEmail(e.target.value);
                  }}
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
              onChange={(e)=>{
                      setPassword(e.target.value);
                  }}
              />
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-icon"><i className="fas fa-lock"></i></div>
          </div>
          <div className="input-div">
            <input 
            type="password" 
            name="confirm" 
            ref={passwordRef} 
            className="form-input" 
            placeholder="  " 
            required 
            onChange={(e)=>{
                    setconfirm(e.target.value);
                }}
            />
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <div className="input-icon"><i className="fas fa-key"></i></div>
            {toggleIcon}
          </div> 
          {submitButton}        
        </form>
        
      </div>
      </div>
    </div>
  )
}

export default Register
