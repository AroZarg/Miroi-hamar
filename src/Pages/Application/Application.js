import React, { useState } from 'react';
import "./Application.css"
import Header from '../../components/Header';
import Multic from "../../components/Multic"
import Firstpaart from '../../components/Firstpaart';
import Secondpart from '../../components/Secondpart';
import Thirdpart from '../../components/Thirdpart';
import Allapk from '../../components/Allapk';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";




function Application() {
  const [applications, setApplications] = useState([]);



  const [clicked,isClicked] = useState(false)

  const onClick = ()=>{
    return !clicked?isClicked(true):isClicked(false) 
  }
  


  return (
<>
<Header onClick={onClick}/>
<div className='login-container'>
    {clicked?<Multic/>:null}
   
          <Routes>
            <Route path="/"element={<Allapk/> }/>
            <Route path="app/step1" element={<Firstpaart/>}/>
            <Route path="/step2" element={<Secondpart/>} />
            <Route path="/step3" element={<Thirdpart/>} />
          </Routes>

   
 
  </div>  
</>
  );
}

export default Application