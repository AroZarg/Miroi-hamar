import React from 'react'
import vec from "./../img/Vector.png"
function Header(props) {  
   
   
  return (
<div className='header'>
    <img src={vec} className='mult' onClick={props.onClick} />
 </div> 
  )
}

export default Header