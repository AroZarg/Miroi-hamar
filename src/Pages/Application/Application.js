import React, { useState } from 'react';
import "./Application.css"
import Header from '../../components/Header';
import Multic from "../../components/Multic"
import Firstpaart from '../../components/Firstpaart';
import Stepper  from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Secondpart from '../../components/Secondpart';
import Thirdpart from '../../components/Thirdpart';



const steps = [
  'Step1',
  'Step2',
  'Step3',
];

function Application() {
  const [applications, setApplications] = useState([]);

  const handleAddApplication = (e) => {
    e.preventDefault();
    const newApplication = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      resume: e.target.resume.value,
    };
    setApplications([...applications, newApplication]);
    e.target.reset();
  };

  const [clicked,isClicked] = useState(false)

  const onClick = ()=>{
    return !clicked?isClicked(true):isClicked(false) 
  }
  


  return (
<>
<Header onClick={onClick}/>
<div className='login-container'>
    {clicked?<Multic/>:null}
  <div className='container'>
      <div className='pageName'>
      <h1 className='headerName'>Application</h1>
      <Stepper className='steps' activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
   </div>
     
    <Firstpaart handleAddApplication={handleAddApplication}/>
  {/* <Secondpart handleAddApplication={handleAddApplication}/>
    <Thirdpart handleAddApplication={handleAddApplication} /> */}
    </div>    
  </div>  
</>
  );
}

export default Application