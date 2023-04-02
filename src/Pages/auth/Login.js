import * as React from 'react';
import { useContext, useEffect, useState } from 'react' ;
import { Link } from 'react-router-dom';
import "./auth.css"
import logo from "./../../img/logo.png"
import btn from "./../../img/linkdin.png"
import { Checkbox } from '@material-ui/core';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { AUTH_API_PATH } from "./apiPath";

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const { setUser, user } = useContext(UserContext);

  const navigate = useNavigate()


  function handleSubmit(event) {
    event.preventDefault();
    if (username && password) {
          axios.post('http://localhost:9090/api/login', {
              username,
              password
          }).then((data) => {
              setUser(data)
              navigate('/app')
          }).catch((error) => {
              console.log(error)
              toast.error(error.response.data.message);
          })
      }
  }

    return (  
      <div>
        <div className='header'>
          <img src={logo} alt='logo' className='logo'/>
        </div>
      <div className="login-container">

    <div className='container'>
      <div className='pageName'>
      <h1 className='headerName'>Login to</h1>
      <h3 className='h3'>Orion Worldwide Innovations</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label className='inputs'>
        <span className='xs'>Email address</span>
          <input className='in' type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label className='inputs'>
          <div className='fgp'>
          <span className='xs'>password</span>
          <Link>Forgot your password?</Link>
          </div>
          <input className='in' type="password" value={password} onChange={handlePasswordChange} />
          <div>
            <Checkbox/>
            <span>Stay singed in</span>
          </div>
        </label>
        <div className='btnc' >  
          <button className='btn' type="submit">Log in</button>
         <img className="btnL"src={btn}/>
         <span className='finishpage'>Dont have an account? <Link to="/register">Singn up</Link> </span>
          </div>      
      </form>
    </div>
    </div>
   </div> 
  );
}
 
export default Login;