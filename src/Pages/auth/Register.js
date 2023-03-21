import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import "./auth.css"
import logo from "./../../img/logo.png"
import btn from "./../../img/linkdin.png"
import { Checkbox } from '@material-ui/core';



const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email,setEamil] = useState('')
  
    const handleRegister = (event) => {
      event.preventDefault();
      // handle register logic here
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
        <input className='in' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label> 
      <label className='inputs'>
      <span className='xs'>Email address</span>
        <input className='in' type="text" value={email} onChange={(e) => setEamil(e.target.value)} />
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