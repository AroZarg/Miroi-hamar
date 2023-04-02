import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import "./auth.css"
import logo from "./../../img/logo.png"
import btn from "./../../img/linkdin.png"
import { Checkbox } from '@material-ui/core';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {UserContext} from '../../context/UserContext';
import {AUTH_API_PATH} from "./apiPath";




const Register = () => {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEamil] = useState('')
   
    

    const navigate = useNavigate()
  
    const handleRegister = (event) => {
      event.preventDefault();
      const role = 0
           axios.post("http://localhost:9090/api/register", {
                email,
                name,
                password,
                role
            }).then(() => {
                navigate('/login')
                toast.success("Success !")
            }).catch(() => {
                toast.error("Error !");
            })
        
      
    };

    return (
      <div>
      <div className='header'>
        <img src={logo} alt='logo' className='logo'/>
      </div>
    <div className="login-container">

  <div className='container'>
    <div className='pageName'>
    <h1 className='headerName'>Sing up to</h1>
    <h3 className='h3'>Orion Worldwide Innovations</h3>
    </div>
    <form onSubmit={handleRegister}>
    <label className='inputs' placeholder='Enter your full name'  >
      <span className='xs'>Full name</span>
        <input className='in' type="text" value={name} onChange={(e) => setUsername(e.target.value)} />
      </label> 
      <label className='inputs'>
      <span className='xs'>Email address</span>
        <input className='in' type="email" value={email} onChange={(e) => setEamil(e.target.value)} />
      </label>
      <label className='inputs'>
        <div className='fgp'>
        <span className='xs'>password</span>
       
        </div>
        <input className='in' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div >
          <Checkbox/>
          <span>Accept Teme and Conditions</span>
        </div>
      </label>
      <div className='btnc' >  
        <button className='btn' type="submit">Log in</button>
       <span className='finishpage'> Have an account? <Link to="/login">Singn in</Link> </span>
        </div>      
    </form>
  </div>
  </div>
 </div> 
);
}   
  


 
export default Register;