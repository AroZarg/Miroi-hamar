import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from "./../img/logo.png"
import logout from "./../img/loguut.png"

function Multic() {
  return (
    <div className='multic'>
    <img src={logo1} className='logo1'/>
      <div className='navigate'>
       <Link className='forNavigate'>Account</Link>
       <Link to = "/app" className='forNavigate'>Application</Link>
       <Link to="/score"className='forNavigate'>Score</Link>
      </div>
      <img src={logout} className='logout'/>
</div>
  )
}

export default Multic